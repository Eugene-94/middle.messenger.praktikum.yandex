import "./chats.page.scss";
import Block from "../../core/block/block.ts";
import render from "../../utils/render.ts";
import data from "../../core/data/mock-data.ts";
import Contact from "../../components/contact";
import template from "./chats.page.tmp.ts";
import Message from "../../components/message";
import SendForm from "./send-form";

class ChatPage extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {
    const form = new SendForm("form", {
        settings: {
            withInternalID: true,
        },
        events: {
            submit: (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                console.log("form data", JSON.stringify(Object.fromEntries(formData)));
            },
        },
    });

    const chatPage = new ChatPage("div", {
        attrs: {
            class: "chats-grid",
        },
        settings: {
            withInternalID: true,
        },
        contacts: data.contacts.map((contact) => (
            new Contact("article", {
                attrs: {
                    class: "contact",
                },
                settings: {
                    withInternalID: true,
                },
                ...contact,
            })
        )),
        messages: data.messages.map((message) => (
            new Message("div", {
                attrs: {
                    class: `message${message.outgoing ? " message_outgoing" : ""}`,
                },
                settings: {
                    withInternalID: true,
                },
                text: message.text,
            })
        )),
        form,
    });

    render("#app", chatPage);
};
