import { SignupInfo } from "@core/types/signup-info.type.ts";
import { LoginInfo } from "@core/types/login-info.type.ts";

export abstract class AuthAbstractRepository {
    public abstract userInfo(): Promise<XMLHttpRequest>;
    public abstract signup(data: SignupInfo): Promise<XMLHttpRequest>;
    public abstract login(data: LoginInfo): Promise<XMLHttpRequest>;
    public abstract logout(): Promise<XMLHttpRequest>;
}
