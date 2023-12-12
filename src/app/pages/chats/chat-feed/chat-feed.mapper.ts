import { Indexed } from "@core/types/indexed.type.ts";
import Message from "@components/message";
import { MessageType } from "@core/types/message.type.ts";

export default (state: Indexed): Indexed => {
    let messages: Message[] = [];
    if (state.messages && state.messages.length > 0) {
        messages = state.messages.map((message: MessageType) => new Message("div", {
            attrs: {
                class: `message ${state.user.id === message.user_id ? "message_outgoing" : ""}`
            },
            text: message.content,
        }))
    }
    return {
        activeChat: state.activeChat,
        messages: messages
    }
}
