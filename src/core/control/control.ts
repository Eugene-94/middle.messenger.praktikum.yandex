import Block from "../block/block.ts";
import { PropsEvents } from "../block/block.types.ts";
import { ValidationFn } from "../../services/validation/validation.types.ts";
import errorsMessages from "../../services/validation/errors-messages.ts";

export abstract class Control<Props extends Record<string, any> = any> extends Block<Props> implements Validatable {

    public value: any;

    protected constructor(
        protected tagName: string = "div",
        protected propsAndChildren: Props,
        public validators: ValidationFn[] = [],
    ) {
        super(tagName, propsAndChildren);
        this.validators = validators;
    }

    public runValidators() {
        let error: string = "";

        this.validators.forEach(validator => {
            const validationResult = validator(this);
            if (validationResult) {
                const errorType = Object.keys(validationResult)[0];
                error = errorsMessages[errorType as keyof typeof errorsMessages];
                return;
            }
        });

        const classes = new Set<string>(this.props.attrs.class.split(" "));
        if (error) {
            classes.add("invalid");
        } else {
            classes.delete("invalid");
        }

        const newProps: unknown = {
            errors: error,
            attrs: { class: Array.from(classes).join(" ") },
            value: this.value
        };

        this.setProps(newProps as Props );
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
