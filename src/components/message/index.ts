import Block from "../../core/block/block.ts";
import template from "./message.tmp.ts";
import "./message.scss";
import { BasicProps } from "../../core/block/block.types.ts";

type MessageProps = BasicProps & {
    text: string;
}

class Message extends Block<MessageProps> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Message;
