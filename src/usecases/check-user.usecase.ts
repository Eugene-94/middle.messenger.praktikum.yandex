import { Usecase } from "@core/usecases/usecase.interface.ts";
import { AuthRepository } from "@data/repositories/auth.repository.ts";
import store from "@data/store/store.ts";
import Router from "@/router/router.ts";
import { UserType } from "@core/types/user.type.ts";


export class CheckUserUsecase implements Usecase<void> {

    private readonly _authRepository: AuthRepository;
    private readonly _router: Router;

    constructor() {
        this._authRepository = new AuthRepository();
        this._router = Router.getInstance("#app");
    }

    public execute(): void {
        this._authRepository.userInfo()
            .then((data) => {
                store.set("user", data.response as UserType);
                console.log("user", data.response)
                if (window.location.pathname.includes("messenger")) {
                    this._router.go(window.location.pathname);
                } else {
                    this._router.go("/messenger");
                }
            })
            .catch((xhr: XMLHttpRequest) => {
                if (xhr.status === 401) {
                    this._router.go("/");
                }
            });
    }
}
