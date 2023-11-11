import template from "./user-edit.page.tmp.ts";
import "./user-edit.page.scss";
import Block from "../../core/block/block.ts";
import render from "../../utils/render.ts";
import Avatar from "../../components/avatar";
import UserInfoComponent from "../../components/user-info";
import data from "../../core/data/mock-data.ts";
import Button from "../../components/button";
import UserForm from "./user-form";

class UserEditPage extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {
    const avatar = new Avatar("div", {
        attrs: {
            class: "avatar",
        },
        settings: {
            withInternalID: true,
        },
    });

    const userInfo = new UserInfoComponent("div", {
        settings: {
            withInternalID: true,
        },
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
        settings: {
            withInternalID: true,
        },
        attrs: {
            class: "user-edit-page__form",
        },
        events: {
            submit: (e) => {
                e.preventDefault();

                const formData = new FormData(e.target as HTMLFormElement);
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
        settings: {
            withInternalID: true,
        },
        avatar,
        userForm,
    });

    render("#app", userEditPage);
};
