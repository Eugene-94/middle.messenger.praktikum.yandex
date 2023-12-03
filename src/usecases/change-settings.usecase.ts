import { Usecase } from "@core/usecases/usecase.interface.ts";
import { UserRepository } from "@data/repositories/user.repository.ts";
import { ProfileSettingsType } from "@core/types/profile-settings.type.ts";
import Router from "@/router/router.ts";
import store from "@data/store/store.ts";
import {UserType} from "@core/types/user.type.ts";

export class ChangeSettingsUsecase implements Usecase<any> {

    private readonly _userRepository: UserRepository;
    private readonly _router: Router;

    constructor() {
        this._userRepository = new UserRepository();
        this._router = Router.getInstance("#app");
    }

    public execute(event: Event) {
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as ProfileSettingsType;
        this._userRepository.profile(data)
            .then((xhr) => {
                store.set("user", xhr.response as UserType);
                this._router.go("/profile")
            });
    }
}
