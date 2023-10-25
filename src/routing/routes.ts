import loginModule from "../pages/login/login.page.ts";
import signupModule from "../pages/signup/signup.page.ts";
import profileModule from "../pages/profile/profile.page.ts";
import editUserModule from "../pages/user-edit/user-edit.page.ts";
import chatModule from "../pages/chats/chats.page.ts";
import notFoundModule from "../pages/404/404.page.ts";
import serverErrorModule from "../pages/500/500.page.ts";
import changePasswordModule from "../pages/change-password/change-password.page.ts";

export default new Map([
    ['login', { processor: () => loginModule() }],
    ['signup', { processor: () => signupModule() }],
    ['profile', { processor: () => profileModule() }],
    ['edit-user', { processor: () => editUserModule() }],
    ['change-password', { processor: () => changePasswordModule() }],
    ['chat', { processor: () => chatModule() }],
    ['404', { processor: () => notFoundModule() }],
    ['500', { processor: () => serverErrorModule() }]
]);
