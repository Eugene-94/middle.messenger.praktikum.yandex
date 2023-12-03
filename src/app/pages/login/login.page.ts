import template from "./login.page.tmp.ts";
import LoginForm from "./login-form";
import Button from "@components/button";
import formInputs from "./login-form/inputs.ts";
import { BasicProps } from "@core/block/block.types.ts";
import "./login.page.scss";
import Link from "@components/link";
import Router from "@/router/router.ts";
import Block from "@/base-blocks/block.ts";
import {LoginUsecase} from "@/usecases/login.usecase.ts";

type LoginPageProps = BasicProps & {
    form: LoginForm,
    link: Link
}

class LoginPage extends Block<LoginPageProps> {

    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default () => {

    const submit = new Button("div", {
        attrs: {
            class: "flex flex-center login__form-action",
        },
        label: "Авторизоваться",
        type: "Submit",
    });

    const inputs = formInputs();

    const loginForm = new LoginForm("form", {
        attrs: {
            class: "login__form",
        },
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                inputs.forEach((input) => {
                    input.updateValue();
                    input.runValidators();
                });

                const loginUsecase = new LoginUsecase();
                loginUsecase.execute(event);
            },
        },
        inputs,
        submit,
    });

    const link = new Link("div", {
        href: "/sign-up",
        label: "Нет аккаунта?",
        events: {
            click: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                if (target.dataset.route) {
                    Router.getInstance("#app").go(target.dataset.route);
                }

            }
        }
    })

    return new LoginPage("div", {
        attrs: {
            class: "login-page",
        },
        form: loginForm,
        link,
    });

};
