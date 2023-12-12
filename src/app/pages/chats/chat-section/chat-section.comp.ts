import { BasicProps } from "@core/block/block.types.ts";
import { ChatType } from "@core/types/chat.type.ts";
import ChatHeader from "@/app/pages/chats/chat-header/chat-header.comp.ts";
import ChatFeed from "@/app/pages/chats/chat-feed/chat-feed.comp.ts";
import Block from "@/base-blocks/block.ts";
import temp from "@/app/pages/chats/chat-section/chat-section.tmp.ts";

type ChatSectionProps = BasicProps & {
    activeChat: ChatType | null;
    chatHeader: ChatHeader,
    chatFeed: ChatFeed,
}

class ChatSection extends Block<ChatSectionProps> {

    public override render(): DocumentFragment {
        return this.compile(temp, this.props);
    }
}

export default ChatSection;
