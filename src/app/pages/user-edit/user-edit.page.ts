import template from "./user-edit.page.tmp.ts";
import "./user-edit.page.scss";
import Avatar from "../../components/avatar/avatar.comp.ts";
import AvatarConnected from "../../components/avatar";
import UserInfoComponent from "@components/user-info/user-info.comp.ts";
import UserInfoComponentConnected from "@components/user-info";
import Button from "@components/button";
import UserForm from "./user-form";
import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import store from "@data/store/store.ts";
import {ChangeSettingsUsecase} from "@/usecases/change-settings.usecase.ts";
import backendConfig from "@/backend.config.ts";
import {UserType} from "@core/types/user.type.ts";

type UserEditPageProps = BasicProps & {
    avatar: Avatar;
    userForm: UserForm;
};

class UserEditPage extends Block<UserEditPageProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {
    const avatar = new AvatarConnected("div", {
        attrs: {
            class: "avatar",
        },
        src: store.state.user ? `${backendConfig.resourses}${(store.state.user as UserType).avatar}` : undefined
    });

    const userInfo = new UserInfoComponentConnected("div", {
        userInfo: store.state.user
    }) as UserInfoComponent;

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

                const useCase = new ChangeSettingsUsecase();
                useCase.execute(event);
            },
        },
        userInfo,
        submit,
    });

    return new UserEditPage("div", {
        attrs: {
            class: "user-edit-page",
        },
        avatar,
        userForm,
    });
};
