import template from "./chat-item.tmp.ts";
import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";

type ChatItemProps = BasicProps & {

}

class ChatItem extends Block<ChatItemProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default ChatItem;
