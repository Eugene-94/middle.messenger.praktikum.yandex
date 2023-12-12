import { Usecase } from "@core/usecases/usecase.interface.ts";
import { UserRepository } from "@data/repositories/user.repository.ts";
import store from "@data/store/store.ts";
import {UserType} from "@core/types/user.type.ts";
import {DialogService} from "@services/dialog/dialog.service.ts";

export class ChangeAvatarUsecase implements Usecase<any> {

    private readonly _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    public execute(event: Event) {
        const formData = new FormData(event.target as HTMLFormElement);
        this._userRepository.setAvatar(formData)
            .then((xhr) => {
                (event.target as HTMLFormElement).reset();
                store.set("user", xhr.response as UserType);
                DialogService.getInstance().close();
            })
            .catch(xhr => {
                console.error(`HTTP request error with code ${xhr.status}. Reason: ${xhr.response.reason}`);
            });
    }
}
