import template from "./signup.page.tmp.ts";
import Block from "../../core/block/block.ts";
import render from "../../utils/render.ts";
import SignupForm from "./signup-form";
import Button from "../../components/button";
import inputs from "./signup-form/inputs.ts";

class SignupPage extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {

    const submit = new Button("div", {
        attrs: {
            class: "flex flex-center",
        },
        label: "Зарегистрироваться",
        type: "Submit",
    });

    const signupForm = new SignupForm("form", {
        attrs: {
            class: "signup__form",
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

    const signupPage = new SignupPage("div", {
        attrs: {
            class: "signup-page",
        },
        settings: {
            withInternalID: true,
        },
        form: signupForm,
    });

    render("#app", signupPage);
};
