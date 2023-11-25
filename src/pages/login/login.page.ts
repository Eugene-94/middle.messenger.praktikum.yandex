import template from "./login.page.tmp.ts";
import Block from "../../core/block/block.ts";
import LoginForm from "./login-form";
import render from "../../utils/render.ts";
import Button from "../../components/button";
import formInputs from "./login-form/inputs.ts";
import {BasicProps} from "../../core/block/block.types.ts";

type LoginPageProps = BasicProps & {
    form: LoginForm
}

class LoginPage extends Block<LoginPageProps> {

    render(): DocumentFragment {
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

                const formData = new FormData(event.target as HTMLFormElement);
                console.log("form data", JSON.stringify(Object.fromEntries(formData)));
            },
        },
        inputs,
        submit,
    });

    const loginPage = new LoginPage("div", {
        attrs: {
            class: "login-page",
        },
        form: loginForm,
    });

    render("#app", loginPage);
};
