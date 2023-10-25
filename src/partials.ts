import Handlebars from "handlebars";

import button from "./components/button.tmp";
import userInfo from "./components/user-info/user-info.tmp.ts";
import contact from "./components/contact/contact.tmp.ts";
import message from "./components/message/message.tmp.ts";
import avatar from "./components/avatar/avatar.tmp.ts";

import "./components/message/message.scss";
import "./components/avatar/avatar.scss";


export default () => {
    Handlebars.registerPartial('button', button);
    Handlebars.registerPartial('userInfo', userInfo);
    Handlebars.registerPartial('contact', contact);
    Handlebars.registerPartial('message', message);
    Handlebars.registerPartial('avatar', avatar);
};
