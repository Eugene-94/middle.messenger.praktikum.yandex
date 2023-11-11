import Block from "../../core/block/block.ts";
import template from "./message.tmp.ts";
import "./message.scss";

class Message extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Message;
