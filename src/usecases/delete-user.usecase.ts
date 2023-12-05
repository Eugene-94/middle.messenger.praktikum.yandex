import { Usecase } from "@core/usecases/usecase.interface.ts";
import {ChatsRepository} from "@data/repositories/chats.repository.ts";

export class DeleteUserUsecase implements Usecase<any> {

    private readonly _chatsRepository: ChatsRepository;

    constructor() {
        this._chatsRepository = new ChatsRepository();
    }

    public execute(chatId: number, users: [number]) {
        return this._chatsRepository.deleteUser({ chatId, users })
            .catch((xhr) => {
                throw Error(`HTTP request error with code ${xhr.status}. Reason: ${xhr.response.reason}`);
            })
    }

}
