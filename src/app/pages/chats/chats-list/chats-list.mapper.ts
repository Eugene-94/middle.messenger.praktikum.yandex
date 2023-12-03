import { Indexed } from "@core/types/indexed.type.ts";
import { ChatType } from "@core/types/chat.type.ts";
import Contact from "@components/contact";
import Router from "@/router/router.ts";
import store from "@data/store/store.ts";
import {WSTransport} from "@services/ws/ws.service.ts";
import {ConnectChatUsecase} from "@/usecases/connect-chat.usecase.ts";
import {WSEvents} from "@services/ws/ws-events.enum.ts";
import setMesseges from "@data/store/set-messeges.ts";
import formatTime from "@utils/format-time.ts";

export default (state: Indexed): Indexed => {
    if (state.chats) {
        const chats = (state.chats as ChatType[]).map(chat => {
            const cloned = { ...chat };
            if (cloned.last_message) {
                const time = cloned.last_message.time;
                cloned.last_message.time = formatTime(time);
            }

            return new Contact("div", {
                active: String(chat.id) == String(store.state.activeChat?.id),
                events: {
                    click: () => {
                        Router.getInstance("#app").go(`/messenger/${chat.id}`);
                        store.set("activeChat", chat);
                        store.set("messages", null);
                        if (WSTransport.getInstance()) {
                            WSTransport.getInstance().close();
                        }
                        // WSTransport.getInstance().close();
                        new ConnectChatUsecase().execute().then(ws => {
                            ws.on(WSEvents.Message, (message) => {
                                setMesseges(message);
                            })
                            ws.send({content: "0", type: "get old"});
                        })
                    }
                },
                ...cloned
            })
        })
        return { chats };
    }
    return { chats: [] };
}
