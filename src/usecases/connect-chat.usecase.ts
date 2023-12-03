import {Usecase} from "@core/usecases/usecase.interface.ts";
import {ChatsRepository} from "@data/repositories/chats.repository.ts";
import store from "@data/store/store.ts";
import {WSTransport} from "@services/ws/ws.service.ts";
import backendConfig from "@/backend.config.ts";

export class ConnectChatUsecase implements Usecase<any> {

    private readonly _chatsRepository: ChatsRepository;

    constructor() {
        this._chatsRepository = new ChatsRepository();
    }

    public execute(): Promise<WSTransport> {
        const chatId = store.state?.activeChat?.id;
        const userId = store.state.user.id;
        return this._chatsRepository.getToken(String(chatId)).then((data: XMLHttpRequest) => {
            const token = (data.response as { token: string }).token;

            const ws = WSTransport.createInstance(`${backendConfig.backendWsHost}/ws/chats/${userId}/${chatId}/${token}`);
            return ws.connect().then(() => ws);
        })
    }
}
