import { Usecase } from "@core/usecases/usecase.interface.ts";
import store from "@data/store/store.ts";
import {ChatsRepository} from "@data/repositories/chats.repository.ts";


export class CreateChatUsecase implements Usecase<void> {

    private readonly _chatsRepository: ChatsRepository;

    constructor() {
        this._chatsRepository = new ChatsRepository();
    }

    public execute(event: Event): Promise<unknown> {
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as { title: string };
        return this._chatsRepository.createChat(data.title)
            .then(() => this._chatsRepository.getChats())
            .then((data) => {
                store.set("chats", data.response);
            });
    }
}
