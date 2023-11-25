import "./chats.page.scss";
import Block from "../../core/block/block.ts";
import render from "../../utils/render.ts";
import data from "../../core/data/mock-data.ts";
import Contact from "../../components/contact";
import template from "./chats.page.tmp.ts";
import Message from "../../components/message";
import SendForm from "./send-form";
import {BasicProps} from "../../core/block/block.types.ts";

type ChatPageProps = BasicProps & {
    contacts: Contact[];
    messages: Message[];
    form: SendForm;
}

class ChatPage extends Block<ChatPageProps> {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {
    const form = new SendForm("form", {
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                const formData = new FormData(event.target as HTMLFormElement);
                console.log("form data", JSON.stringify(Object.fromEntries(formData)));
            },
        },
    });

    const chatPage = new ChatPage("div", {
        attrs: {
            class: "chats-grid",
        },
        contacts: data.contacts.map((contact) => (
            new Contact("article", {
                attrs: {
                    class: "contact",
                },
                ...contact,
            })
        )),
        messages: data.messages.map((message) => (
            new Message("div", {
                attrs: {
                    class: `message${message.outgoing ? " message_outgoing" : ""}`,
                },
                text: message.text,
            })
        )),
        form,
    });

    render("#app", chatPage);
};
