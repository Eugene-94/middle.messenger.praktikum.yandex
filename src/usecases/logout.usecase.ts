import {Usecase} from "@core/usecases/usecase.interface.ts";
import {AuthRepository} from "@data/repositories/auth.repository.ts";
import Router from "@/router/router.ts";

export class LogoutUsecase implements Usecase<any> {
    private readonly _authRepository: AuthRepository;

    constructor() {
        this._authRepository = new AuthRepository();
    }

    public execute() {
        this._authRepository.logout()
            .then(() => {
                Router.getInstance("#app").go("/")
            })
            .catch(xhr => {
                throw Error(`HTTP request error with code ${xhr.status}. Reason: ${xhr.response.reason}`);
            })
    }
}
