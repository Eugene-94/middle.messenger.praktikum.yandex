import {BasicProps} from "@core/block/block.types.ts";
import Contact from "@components/contact";
import Block from "@/base-blocks/block.ts";
import temp from "./chats-list.tmp.ts";;

type ChatsListProps = BasicProps & {
    chats: Contact[];
}

class ChatsList extends Block<ChatsListProps> {

    public init() {
        super.init();
    }

    public override render(): DocumentFragment {
        return this.compile(temp, this.props);
    }
}

export default ChatsList;
