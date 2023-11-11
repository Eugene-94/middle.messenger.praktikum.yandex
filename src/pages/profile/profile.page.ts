import template from "./profile.page.tmp.ts";
import Block from "../../core/block/block.ts";
import Avatar from "../../components/avatar";
import render from "../../utils/render.ts";
import UserInfoComponent from "../../components/user-info";
import data from "../../core/data/mock-data.ts";

class ProfilePage extends Block {
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
        clickable: true,
    });

    const userInfo = new UserInfoComponent("div", {
        settings: {
            withInternalID: true,
        },
        userInfo: data.userInfo,
        readonly: true,
    });

    const profilePage = new ProfilePage("div", {
        attrs: {
            class: "container",
        },
        settings: {
            withInternalID: true,
        },
        avatar,
        userInfo,
    });

    render("#app", profilePage);
};
