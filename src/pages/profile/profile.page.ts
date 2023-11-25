import template from "./profile.page.tmp.ts";
import Block from "../../core/block/block.ts";
import Avatar from "../../components/avatar";
import render from "../../utils/render.ts";
import UserInfoComponent from "../../components/user-info";
import data from "../../core/data/mock-data.ts";
import {BasicProps} from "../../core/block/block.types.ts";

type ProfilePageProps = BasicProps & {
    avatar: Avatar;
    userInfo: UserInfoComponent
};

class ProfilePage extends Block<ProfilePageProps> {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {
    const avatar = new Avatar("div", {
        attrs: {
            class: "avatar",
        },
        clickable: true,
    });

    const userInfo = new UserInfoComponent("div", {
        userInfo: data.userInfo,
        readonly: true,
    });

    const profilePage = new ProfilePage("div", {
        attrs: {
            class: "container",
        },
        avatar,
        userInfo,
    });

    render("#app", profilePage);
};
