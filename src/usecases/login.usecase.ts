import {Usecase} from "@core/usecases/usecase.interface.ts";
import {AuthRepository} from "@data/repositories/auth.repository.ts";
import Router from "@/router/router.ts";
import { LoginInfo } from "@core/types/login-info.type.ts";
import store from "@data/store/store.ts";
import {UserType} from "@core/types/user.type.ts";

export class LoginUsecase implements Usecase<void> {

    private readonly _authRepository: AuthRepository;

    constructor() {
        this._authRepository = new AuthRepository();
    }

    public execute(event: Event) {
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as LoginInfo;
        this._authRepository.login(data)
            .then(() => {
                return this._authRepository.userInfo();
            })
            .then((data) => {
                store.set("user", data.response as UserType);
                Router.getInstance("#app").go("/messenger")
            })
            .catch((xhr) => {
                throw Error(`HTTP request error with code ${xhr.status}. Reason: ${xhr.response.reason}`);
            });
    }

}
