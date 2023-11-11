import Block from "../../core/block/block.ts";
import template from "./contact.tmp.ts";

class Contact extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Contact;
