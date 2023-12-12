import { Usecase } from "@core/usecases/usecase.interface.ts";
import { AuthRepository } from "@/data/repositories/auth.repository.ts";
import { SignupInfo } from "@core/types/signup-info.type.ts";
import Router from "@/router/router.ts";

export class SignupUsecase implements Usecase<void> {

    private readonly _authRepository: AuthRepository;

    constructor() {
        this._authRepository = new AuthRepository();
    }

    public execute(event: Event) {
        if (!(event instanceof Event)) {
            return;
        }
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as SignupInfo;
        this._authRepository.signup(data)
            .then(() => Router.getInstance("#app").go("/messenger"))
            .catch((xhr) => {
                console.error(`HTTP request error with code ${xhr.status}. Reason: ${xhr.response.reason}`);
            });
    }

}
