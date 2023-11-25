import template from "./change-password.page.tmp.ts";
import "./change-password.scss";
import render from "../../utils/render.ts";
import Block from "../../core/block/block.ts";
import ChangePasswordForm from "./change-password-form";
import formInputs from "./change-password-form/inputs.ts";
import Button from "../../components/button";
import Avatar from "../../components/avatar";
import {BasicProps} from "../../core/block/block.types.ts";

type changePasswordPageProps = BasicProps & {
    avatar: Avatar;
    form: ChangePasswordForm
}

class ChangePasswordPage extends Block<changePasswordPageProps> {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {

    const submit = new Button("div", {
        attrs: {
            class: "flex flex-center change-password__form-actions",
        },
        label: "Сохранить",
        type: "Submit",
    });

    const inputs = formInputs();

    const form = new ChangePasswordForm("form", {
        attrs: {
            class: "change-password__form",
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

    const avatar = new Avatar("div", {
        attrs: {
            class: "avatar",
        },
    });

    const changePasswordPage = new ChangePasswordPage("div", {
        attrs: {
            class: "change-password-page",
        },
        form,
        avatar,
    });

    render("#app", changePasswordPage);
};
