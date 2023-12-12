import { AuthAbstractRepository } from "@core/data/repositories/auth.abstract.repository.ts";
import HTTPTransport from "@services/http/http.service.ts";
import { SignupInfo } from "@core/types/signup-info.type.ts";
import { LoginInfo } from "@core/types/login-info.type.ts";

export class AuthRepository extends AuthAbstractRepository {

    private readonly _httpClient: HTTPTransport;

    constructor() {
        super();
        this._httpClient = new HTTPTransport("auth/");
    }
    public login(data: LoginInfo): Promise<XMLHttpRequest> {
        return this._httpClient.post("signin", { data });
    }

    public logout(): Promise<XMLHttpRequest> {
        return this._httpClient.post("logout");
    }

    public signup(data: SignupInfo): Promise<XMLHttpRequest> {
        return this._httpClient.post("signup", { data });
    }

    public userInfo(): Promise<XMLHttpRequest> {
        return this._httpClient.get("user");
    }

}
