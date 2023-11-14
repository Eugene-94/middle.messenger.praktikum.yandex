import template from "./signup.page.tmp.ts";
import Block from "../../core/block/block.ts";
import render from "../../utils/render.ts";
import SignupForm from "./signup-form";
import Button from "../../components/button";
import formInputs from "./signup-form/inputs.ts";
import {BasicProps} from "../../core/block/block.types.ts";

type SignupPageProps = BasicProps & {
    form: SignupForm
};

class SignupPage extends Block<SignupPageProps> {
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

    const inputs = formInputs();

    const signupForm = new SignupForm("form", {
        attrs: {
            class: "signup__form",
        },
        events: {
            submit: (event) => {
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

    const signupPage = new SignupPage("div", {
        attrs: {
            class: "signup-page",
        },
        form: signupForm,
    });

    render("#app", signupPage);
};
