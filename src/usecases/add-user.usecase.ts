import { Usecase } from "@core/usecases/usecase.interface.ts";
import store from "@data/store/store.ts";
import {ChatsRepository} from "@data/repositories/chats.repository.ts";
import {UserRepository} from "@data/repositories/user.repository.ts";
import {UserType} from "@core/types/user.type.ts";
import {DialogService} from "@services/dialog/dialog.service.ts";


export class AddUserUsecase implements Usecase<void> {

    private readonly _chatsRepository: ChatsRepository;
    private readonly _userRepository: UserRepository;

    constructor() {
        this._chatsRepository = new ChatsRepository();
        this._userRepository = new UserRepository();
    }

    public execute(event: Event): Promise<unknown> {
        const formData = new FormData(event.target as HTMLFormElement);
        const login = (Object.fromEntries(formData.entries()) as { login: string }).login;


        return this._userRepository.searchUser(login)
            .then((data: XMLHttpRequest) => {
                const res = data.response as UserType[];

                if (res.length > 0) {
                    const chatId = Number(store.state.activeChat.id);
                    const users = [Number(res[0].id)]
                    return this._chatsRepository.addUser({ users, chatId });
                }
            })
            .then(() => {
                DialogService.getInstance().close();
            })
    }
}
