import template from "./contact.tmp.ts";
import { BasicProps } from "@core/block/block.types.ts";
import "./contact.scss";
import Block from "@/base-blocks/block.ts";
import {ChatType} from "@core/types/chat.type.ts";


type ContactProps = BasicProps & ChatType & {
    active?: boolean
}

class Contact extends Block<ContactProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Contact;
