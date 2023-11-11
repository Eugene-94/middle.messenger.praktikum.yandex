import template from "./login.page.tmp.ts";
import Block from "../../core/block/block.ts";
import LoginForm from "./login-form";
import render from "../../utils/render.ts";
import Button from "../../components/button";
import inputs from "./login-form/inputs.ts";

class LoginPage extends Block {

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

    const loginForm = new LoginForm("form", {
        attrs: {
            class: "login__form",
        },
        settings: {
            withInternalID: true,
        },
        events: {
            submit: (e) => {
                e.preventDefault();
                inputs.forEach((input) => {
                    input.updateValue();
                    input.runValidators();
                });

                const formData = new FormData(e.target as HTMLFormElement);
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
        settings: {
            withInternalID: true,
        },
        form: loginForm,
    });

    render("#app", loginPage);
};
