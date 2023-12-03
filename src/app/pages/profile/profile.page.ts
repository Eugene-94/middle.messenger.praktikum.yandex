import template from "./profile.page.tmp.ts";
import Avatar from "@components/avatar/avatar.comp.ts";
import AvatarConnected from "@components/avatar";
import UserInfoComponent from "@components/user-info/user-info.comp.ts";
import UserInfoComponentConnected from "@components/user-info";
import { BasicProps } from "@core/block/block.types.ts";
import "./profile.page.scss";
import Block from "@/base-blocks/block.ts";
import Link from "@components/link";
import Router from "@/router/router.ts";
import { Indexed } from "@core/types/indexed.type.ts";
import connector from "@data/store/connector.ts";
import store from "@data/store/store.ts";
import { DialogService } from "@services/dialog/dialog.service.ts";
import ChangeAvatar from "@components/change-avatar";
import ChangeAvatarForm from "@components/change-avatar/change-avatar-form";
import Button from "@components/button";
import {ChangeAvatarUsecase} from "@/usecases/change-avatar.usecase.ts";
import backendConfig from "@/backend.config.ts";
import {UserType} from "@core/types/user.type.ts";


type ProfilePageProps = BasicProps & {
    avatar: Avatar;
    userInfo: UserInfoComponent,
    settingsLink: Link
};

const profilePageMapper = (state: Indexed): Indexed => {
    return { user: state.user };
}

class ProfilePage extends Block<ProfilePageProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {

    const submit = new Button("div", {
        attrs: {
            class: "flex flex-center",
        },
        label: "Поменять",
        type: "Submit",
    });

    const changeAvatarForm = () => new ChangeAvatarForm("form", {
        events: {
            submit: (event: Event) => {
                event.preventDefault();

                new ChangeAvatarUsecase().execute(event);
            },
        },
        submit
    });

    const changeAvatar = () => new ChangeAvatar("div", {
        form: changeAvatarForm()
    });

    const avatar = new AvatarConnected("div", {
        attrs: {
            class: "avatar",
        },
        events: {
            click: () => {
                const dialogService = DialogService.getInstance();
                dialogService.open("Загрузка аватара", changeAvatar());
            }
        },
        clickable: true,
        src: store.state.user ? `${backendConfig.resourses}${(store.state.user as UserType).avatar}` : undefined
    });

    const settingsLink = new Link("div", {
        href: "/settings",
        label: "Изменить данные",
        events: {
            click: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                if (target.dataset.route) {
                    Router.getInstance("#app").go(target.dataset.route);
                }

            }
        }
    })

    const userInfo = new UserInfoComponentConnected("div", {
        readonly: true,
        userInfo: store.state.user
    }) as UserInfoComponent;

    const connected = connector(ProfilePage, profilePageMapper);

    return new connected("div", {
        attrs: {
            class: "container",
        },
        avatar,
        userInfo,
        settingsLink
    });

};
