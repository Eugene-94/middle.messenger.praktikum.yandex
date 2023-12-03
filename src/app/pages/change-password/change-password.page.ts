import template from "./change-password.page.tmp.ts";
import "./change-password.scss";
import ChangePasswordForm from "./change-password-form";
import formInputs from "./change-password-form/inputs.ts";
import Button from "@components/button";
import Avatar from "@components/avatar/avatar.comp.ts";
import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";


type changePasswordPageProps = BasicProps & {
    avatar: Avatar;
    form: ChangePasswordForm
}

class ChangePasswordPage extends Block<changePasswordPageProps> {
    public override render(): DocumentFragment {
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

    return new ChangePasswordPage("div", {
        attrs: {
            class: "change-password-page",
        },
        form,
        avatar,
    });

};
