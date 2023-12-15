import { HTTPTransport } from "@services/http/http.service.ts";
import { UserAbstractRepository } from "@core/data/repositories/user.abstract.repository.ts";
import { ProfileSettingsType } from "@core/types/profile-settings.type.ts";

export class UserRepository extends UserAbstractRepository {

    private readonly _httpClient: HTTPTransport;

    constructor() {
        super();
        this._httpClient = new HTTPTransport("user/");
    }

    public getUser(id: number): Promise<XMLHttpRequest> {
        return this._httpClient.get(`${id}`);
    }

    public profile(data: ProfileSettingsType): Promise<XMLHttpRequest> {
        return this._httpClient.put("profile", { data });
    }

    public setAvatar(data: FormData): Promise<XMLHttpRequest> {
        return this._httpClient.put("profile/avatar", { data });
    }

    public searchUser(login: string): Promise<XMLHttpRequest> {
        return this._httpClient.post("search", { data: { login } });
    }

}
