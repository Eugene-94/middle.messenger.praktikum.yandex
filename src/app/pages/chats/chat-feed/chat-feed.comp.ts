import {BasicProps} from "@core/block/block.types.ts";
import {ChatType} from "@core/types/chat.type.ts";
import Message from "@components/message";
import SendForm from "@/app/pages/chats/send-form";
import Block from "@/base-blocks/block.ts";
import {WSTransport} from "@services/ws/ws.service.ts";
import {BlockEvents} from "@core/block/block-events.enum.ts";
import {ConnectChatUsecase} from "@/usecases/connect-chat.usecase.ts";
import {WSEvents} from "@services/ws/ws-events.enum.ts";
import setMesseges from "@data/store/set-messeges.ts";
import temp from "@/app/pages/chats/chat-feed/chat-feed.tmp.ts";

type ChatFeedProps = BasicProps & {
    activeChat?: ChatType,
    messages: Message[];
    form: SendForm
}

class ChatFeed extends Block<ChatFeedProps> {

    private ws: WSTransport | null = null;
    private inited: boolean = false;

    init() {
        super.init();
        this.eventBus.on(BlockEvents.FLOW_RENDER, () => {
            if (this.inited) {
                return;
            }
            if (this.props.activeChat) {

                new ConnectChatUsecase().execute().then(ws => {
                    this.ws = ws;
                    this.ws.on(WSEvents.Message, (message) => {
                        setMesseges(message);
                    })
                    this.ws.send({ content: "0", type: "get old" });
                    this.inited = true;
                });
            }
        })
    }

    public override render(): DocumentFragment {
        return this.compile(temp, this.props);
    }
}

export default ChatFeed;