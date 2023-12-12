import store from "@data/store/store.ts";
import {MessageType} from "@core/types/message.type.ts";

export default (message: MessageType) => {
    if (store.state.messages) {
        store.set("messages", [message, ...store.state.messages]);
    } else {
        store.set("messages", message);
    }
}
