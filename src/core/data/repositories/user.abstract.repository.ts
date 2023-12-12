import { ProfileSettingsType } from "@core/types/profile-settings.type.ts";

export abstract class UserAbstractRepository {
    public abstract getUser(id: number): Promise<XMLHttpRequest>;
    public abstract profile(data: ProfileSettingsType): Promise<XMLHttpRequest>;
}
