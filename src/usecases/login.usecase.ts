import {Usecase} from "@core/usecases/usecase.interface.ts";
import {AuthRepository} from "@data/repositories/auth.repository.ts";
import Router from "@/router/router.ts";
import { LoginInfo } from "@core/types/login-info.type.ts";

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
                Router.getInstance("#app").go("/messenger")
            })
            .catch((error) => console.log("Login error", error));
    }

}