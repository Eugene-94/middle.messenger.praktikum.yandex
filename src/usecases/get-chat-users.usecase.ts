import { Usecase } from "@core/usecases/usecase.interface.ts";
import {ChatsRepository} from "@data/repositories/chats.repository.ts";
import {UserType} from "@core/types/user.type.ts";


export class GetChatUsersUsecase implements Usecase<void> {

    private readonly _chatsRepository: ChatsRepository;

    constructor() {
        this._chatsRepository = new ChatsRepository();
    }

    public execute(id: number): Promise<UserType[] | void> {
        return this._chatsRepository.getChatUsers(id)
            .then((data) => {
                return data.response as UserType[]
            })
            .catch((xhr) => {
                console.error(`HTTP request error with code ${xhr.status}. Reason: ${xhr.response.reason}`);
            });
    }
}
