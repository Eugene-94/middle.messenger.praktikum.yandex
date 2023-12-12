import template from "./link.tmp.ts";
import { BasicProps, PropsEvents } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";

type LinkProps = BasicProps & {
    href: string,
    label: string,
}

class Link extends Block<LinkProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    public addEvents() {
        const { events = {} } = this.props;
        const inner = this.element && this.element.querySelector("a");
        Object.keys(events).forEach((eventName: string): void => {
            inner && inner.addEventListener(eventName, events[eventName as keyof PropsEvents]);
        });
    }
}

export default Link;
