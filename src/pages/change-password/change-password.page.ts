import template from "./change-password.page.tmp.ts";
import "./change-password.scss";
import render from "../../utils/render.ts";
import Block from "../../core/block/block.ts";
import ChangePasswordForm from "./change-password-form";
import inputs from "./change-password-form/inputs.ts";
import Button from "../../components/button";
import Avatar from "../../components/avatar";

class ChangePasswordPage extends Block {
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

    const form = new ChangePasswordForm("form", {
        attrs: {
            class: "change-password__form",
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

    const avatar = new Avatar("div", {
        attrs: {
            class: "avatar",
        },
        settings: {
            withInternalID: true,
        },
    });

    const changePasswordPage = new ChangePasswordPage("div", {
        attrs: {
            class: "change-password-page",
        },
        settings: {
            withInternalID: true,
        },
        form,
        avatar,
    });

    render("#app", changePasswordPage);
};
