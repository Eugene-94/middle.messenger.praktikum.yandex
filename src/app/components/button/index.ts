import template from "./button.tmp.ts";
import { BasicProps, PropsEvents } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";

type ButtonProps = BasicProps & {
    label?: string,
    type: "Submit",
}

class Button extends Block<ButtonProps> {
    public override render(): DocumentFragment {
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
