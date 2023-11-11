import Block from "../block/block.ts";
import { PropsAndChildren, PropsEvents } from "../block/block.types.ts";
import { ValidationFn } from "../../services/validation/validation.types.ts";

export abstract class Control extends Block implements Validatable {

    public value: any;

    protected constructor(
        protected tagName: string = "div",
        protected propsAndChildren: PropsAndChildren = {},
        public validators: ValidationFn[] = [],
    ) {
        super(tagName, propsAndChildren);
        this.validators = validators;
    }

    public runValidators() {
        const errors = this.validators.some((validator) => validator(this));
        const classes = new Set<string>(this.props.attrs.class.split(" "));
        if (errors) {
            classes.add("invalid");
        } else {
            classes.delete("invalid");
        }

        this.setProps({ errors, attrs: { class: Array.from(classes).join(" ") }, value: this.value } );
    }

    public updateValue(): void {
        const input = this.element && this.element.querySelector("input");
        this.value = input && input.value || null;
    }

    public addEvents() {
        const { events = {} } = this.props;
        const inner = this.element && this.element.querySelector("input");
        Object.keys(events).forEach((eventName: string): void => {
            inner && inner.addEventListener(eventName, events[eventName as keyof PropsEvents]);
        })
    }

}

export interface Validatable {
    value: any;
    validators: ValidationFn[];

    runValidators: (control: Control) => void;
}
