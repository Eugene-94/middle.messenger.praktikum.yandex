import { Usecase } from "@core/usecases/usecase.interface.ts";
import {ChatsRepository} from "@data/repositories/chats.repository.ts";
import Router from "@/router/router.ts";
import store from "@data/store/store.ts";

export class DeleteChatUsecase implements Usecase<any> {

    private readonly _chatsRepository: ChatsRepository;
    private readonly _router: Router;

    constructor() {
        this._chatsRepository = new ChatsRepository();
        this._router = Router.getInstance("#app");
    }

    public execute(id: string) {
        this._chatsRepository.deleteChat(id)
            .then(() => this._chatsRepository.getChats())
            .then((data) => {
                store.set("activeChat", null);
                store.set("chats", data.response);
                this._router.go("/messenger");
            })
    }

}