import template from "./message.tmp.ts";
import "./message.scss";
import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";

type MessageProps = BasicProps & {
    text: string;
}

class Message extends Block<MessageProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Message;
