import Router from "../router/router.ts";
import page404 from "./pages/404/404.page.ts";
import page500 from "./pages/500/500.page.ts";
import signupPage from "./pages/signup/signup.page.ts";
import loginPage from "./pages/login/login.page.ts";
import profilePage from "./pages/profile/profile.page.ts";
import settingsPage from "./pages/user-edit/user-edit.page.ts";
import ChatsPage from "./pages/chats/chats.page.ts";
import ChangePasswordPage from "./pages/change-password/change-password.page.ts";
import { CheckUserUsecase } from "@/usecases/check-user.usecase.ts";
import logoutPage from "@/app/pages/logoutPage/logout.page.ts";


export default () => {
    const router = Router.getInstance("#app");
    const checkUserUsecase = new CheckUserUsecase();

    router
        .use("/404", page404)
        .use("/500", page500)
        .use("/sign-up", signupPage)
        .use("/", loginPage)
        .use("/logout", logoutPage)
        .use("/profile", profilePage)
        .use("/settings", settingsPage)
        .use("/messenger/:id", ChatsPage)
        .use("/change-password", ChangePasswordPage)
        .start();

    checkUserUsecase.execute();
};
