import { Usecase } from "@core/usecases/usecase.interface.ts";
import { AuthRepository } from "@data/repositories/auth.repository.ts";
import store from "@data/store/store.ts";
import Router from "@/router/router.ts";
import { UserType } from "@core/types/user.type.ts";
import {StoreEvents} from "@data/store/store-events.enum.ts";


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
                store.on(StoreEvents.Updated, () => {});
                store.set("user", data.response as UserType);
                if (
                    window.location.pathname.includes("messenger") ||
                    window.location.pathname.includes("profile") ||
                    window.location.pathname.includes("settings")
                ) {
                    this._router.go(window.location.pathname);
                } else {
                    this._router.go("/messenger");
                }
            })
            .catch((xhr: XMLHttpRequest) => {
                if (xhr.status === 401) {
                    if (window.location.pathname.includes("sign-up")) {
                        this._router.go(window.location.pathname);
                    } else {
                        this._router.go("/");
                    }
                }
            });
    }
}
