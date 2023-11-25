import Block from "../../core/block/block.ts";
import template from "./contact.tmp.ts";
import {BasicProps} from "../../core/block/block.types.ts";

type ContactProps = BasicProps & {
    name: string;
    time: string;
    message: string;
    counter: number;
}

class Contact extends Block<ContactProps> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Contact;
