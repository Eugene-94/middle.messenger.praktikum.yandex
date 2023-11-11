import Block from "../../core/block/block.ts";
import template from "./button.tmp.ts";
import { PropsEvents } from "../../core/block/block.types.ts";

class Button extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    public addEvents() {
        const { events = {} } = this.props;
        const inner = this.element && this.element.querySelector("button");
        Object.keys(events).forEach((eventName: string): void => {
            inner && inner.addEventListener(eventName, events[eventName as keyof PropsEvents]);
        });
    }
}

export default Button;
