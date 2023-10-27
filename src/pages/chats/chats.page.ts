import template from "./chats.page.tmp.ts";
import renderer from "../../renderer.ts";
import './chats.page.scss';

const data = {
    messages: [
        { text: 'Lorem ipsum', outgoing: false },
        { text: 'Lorem ipsum2', outgoing: true }
    ]
}

export default () => {
    return renderer(template, data);
};
