import { Usecase } from "@core/usecases/usecase.interface.ts";
import store from "@data/store/store.ts";
import Router from "@/router/router.ts";
import {ChatsRepository} from "@data/repositories/chats.repository.ts";
import {ChatType} from "@core/types/chat.type.ts";


export class GetChatsUsercase implements Usecase<void> {

    private readonly _chatsRepository: ChatsRepository;
    private readonly _router: Router;

    constructor() {
        this._chatsRepository = new ChatsRepository();
        this._router = Router.getInstance("#app");
    }

    public execute(): void {
        this._chatsRepository.getChats()
            .then((data) => {
                store.set("chats", data.response as ChatType[]);
                this._checkUrlChatId(data.response as ChatType[]);
            })
            .catch((xhr: XMLHttpRequest) => {
                if (xhr.status === 401) {
                    this._router.go("/");
                }
            });
    }

    private _checkUrlChatId(chats: ChatType[]) {
        const chatPath = window.location.pathname.slice(1);
        if (chatPath.split("/").length === 2) {
            const id = chatPath.split("/")[1];
            const target = chats.find(chat => String(chat.id) === id);
            if (target) {
                store.set("activeChat", target);
            } else {
                this._router.go("/404");
            }
        }
    }
}
