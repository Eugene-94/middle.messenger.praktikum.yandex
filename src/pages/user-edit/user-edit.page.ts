import template from "./user-edit.page.tmp.ts";
import "./user-edit.page.scss";
import Block from "../../core/block/block.ts";
import render from "../../utils/render.ts";
import Avatar from "../../components/avatar";
import UserInfoComponent from "../../components/user-info";
import data from "../../core/data/mock-data.ts";
import Button from "../../components/button";
import UserForm from "./user-form";
import { BasicProps } from "../../core/block/block.types.ts";

type UserEditPageProps = BasicProps & {
    avatar: Avatar;
    userForm: UserForm;
};

class UserEditPage extends Block<UserEditPageProps> {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {
    const avatar = new Avatar("div", {
        attrs: {
            class: "avatar",
        },
    });

    const userInfo = new UserInfoComponent("div", {
        userInfo: data.userInfo,
    });

    const submit = new Button("div", {
        attrs: {
            class: "flex flex-center user-edit-page__form-actions",
        },
        label: "Сохранить",
        type: "Submit",
    });

    const userForm = new UserForm("form", {
        attrs: {
            class: "user-edit-page__form",
        },
        events: {
            submit: (event: Event): void => {
                event!.preventDefault();

                const formData = new FormData(event.target as HTMLFormElement);
                console.log("form data", JSON.stringify(Object.fromEntries(formData)));
            },
        },
        userInfo,
        submit,
    });

    const userEditPage = new UserEditPage("div", {
        attrs: {
            class: "user-edit-page",
        },
        avatar,
        userForm,
    });

    render("#app", userEditPage);
};
