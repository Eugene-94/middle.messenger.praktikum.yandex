import { BlockEvents } from "./block-events.enum.ts";
import EventBus from "../../services/event-bus.ts";
import {
    BlockChildren,
    BlockLists,
    BlockMeta,
    Props,
    PropsAndChildren,
    PropsEvents
} from "./block.types.ts";
import { v4 as makeUUID } from "uuid";

import Handlebars from "handlebars";

abstract class Block {

    abstract render(): DocumentFragment;

    public eventBus: EventBus;


    private _meta: BlockMeta | null = null;
    private _id: string | null;
    private _setUpdate = false;

    protected props: Props;
    protected children: BlockChildren;
    protected lists: BlockLists;
    protected element: HTMLElement | null = null;

    public constructor(protected tagName: string = "div", protected propsAndChildren: PropsAndChildren = {}) {
        const { children, props, lists } = this._getChildren(propsAndChildren);

        this._id = props.settings && props.settings.withInternalID && makeUUID() || null;

        this.children = this._makePropsProxy(children);
        this.lists = this._makePropsProxy(lists);

        this.props = this._makePropsProxy({...props, __id: this._id});

        this._meta = {
            tagName: this.tagName,
            props: this.props
        };

        this.eventBus = new EventBus();

        this._registerEvents(this.eventBus);

        this.eventBus.emit(BlockEvents.INIT);
    }

    public compile(template: string, props: PropsAndChildren): DocumentFragment {
        const propsAndStubs: PropsAndChildren = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });

        Object.keys(this.lists).forEach((key) => {
            propsAndStubs[key] = `<div data-id="list__${key}"></div>`
        });

        const fragment: HTMLTemplateElement = this._createDocumentElement("template") as HTMLTemplateElement;
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            const childContent = child.getContent();

            stub && childContent && stub.replaceWith(childContent);
        });

        Object.entries(this.lists).forEach(([key, child]) => {
            const stub = fragment.content.querySelector(`[data-id="list__${key}"]`);
            const listContent = this._createDocumentElement("template") as HTMLTemplateElement;

            child.forEach(item => {
                if (item instanceof Block) {
                    item.getContent() && listContent.content.append(item.getContent() as Node);
                } else {
                    listContent.content.append(`${item}`);
                }
            })

            if (!stub) return;

            stub.replaceWith(listContent.content);
        });

        return fragment.content;
    }

    private _getChildren(propsAndChildren: PropsAndChildren): { props: Props, children: BlockChildren, lists: BlockLists } {
        const children: BlockChildren = {};
        const props: Props = {};
        const lists: BlockLists = {}

        Object.entries(propsAndChildren).forEach(([key, value]): void => {
            if (value instanceof Block) {
                children[key] = value;
            } else if(Array.isArray(value)) {
                lists[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props, lists };
    }

    private _registerEvents(eventBus: EventBus): void {
        eventBus.on(BlockEvents.INIT, this.init.bind(this));
        eventBus.on(BlockEvents.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(BlockEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(BlockEvents.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources(): void {
        if (!this._meta) {
            return;
        }
        const { tagName } = this._meta;
        this.element = this._createDocumentElement(tagName);
    }

    public init(): void {
        this._createResources();

        this.eventBus.emit(BlockEvents.FLOW_RENDER);
    }

    private _componentDidMount(): void {
        this.componentDidMount();

        Object.values(this.children).forEach(child => {
            child.dispatchComponentDidMount();
        });
    }

    public componentDidMount(oldProps?: Props): void {
        console.log("componentDidMount", oldProps);
    }

    dispatchComponentDidMount() {
        this.eventBus.emit(BlockEvents.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: Props, newProps: Props): void {
        const response: boolean = this.componentDidUpdate(oldProps, newProps);

        response && this.eventBus.emit(BlockEvents.FLOW_RENDER);
        // this._render();
    }

    public componentDidUpdate(oldProps: Props, newProps: Props): boolean {
        console.log("Props was updated", oldProps, newProps);
        return true;
    }

    public setProps = (newProps: Props) => {
        if (!newProps) {
            return;
        }

        this._setUpdate = false;
        const oldValue = { ...this.props };
        const { props, children, lists} = this._getChildren(newProps);

        if (Object.values(props).length > 0) {
            Object.assign(this.props, props);
        }

        if (Object.values(children).length > 0) {
            Object.assign(this.children, children);
        }

        if (Object.values(lists).length > 0) {
            Object.assign(this.lists, lists);
        }


        console.log("this._setUpdate", this._setUpdate)

        this.eventBus.emit(BlockEvents.FLOW_CDU, oldValue, this.props);

        // if (this._setUpdate) {
        //     this.eventBus.emit(BlockEvents.FLOW_CDU, oldValue, this.props);
        //     this._setUpdate = false;
        // }

    };

    private _makePropsProxy(props: Props): Props {
        return new Proxy(props, {
            get(target: Props, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target: Props, prop: string, value): boolean => {
                if (target[prop] !== value) {
                    target[prop] = value;
                    this._setUpdate = true;
                }

                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    private _render(): void {
        const block = this.render();

        this._removeEvents();

        if (!this.element) {
            return;
        }

        this.element.innerHTML = "";
        this.element.appendChild(block);

        this.addEvents()
        this._addAttributes();
    }

    public addEvents(): void {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName: string): void => {
            this.element && this.element.addEventListener(eventName, events[eventName as keyof PropsEvents]);
        });
    }

    private _removeEvents(): void {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName: string): void => {
            this.element && this.element.removeEventListener(eventName, events[eventName as keyof PropsEvents]);
        });
    }

    private _addAttributes(): void {
        const { attrs = {} } = this.props;

        Object.keys(attrs).forEach((attr: string): void => {
            this.element && this.element.setAttribute(attr, attrs[attr]);
        })
    }

    public getContent(): HTMLElement | null {
        return this.element;
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        const element = document.createElement(tagName);
        this._id && element.setAttribute("data-id", this._id);
        return element;
    }
}

export default Block;
