import "./chats.page.scss";
import template from "./chats.page.tmp.ts";
import SendForm from "./send-form";
import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import Link from "@components/link";
import Router from "@/router/router.ts";
import {GetChatsUsercase} from "@/usecases/get-chats.usercase.ts";
import {CreateChatUsecase} from "@/usecases/create-chat.usecase.ts";
import store from "@data/store/store.ts";
import {DialogService} from "@services/dialog/dialog.service.ts";
import AddChat from "@components/add-chat";
import AddChatForm from "@components/add-chat/add-chat-form";
import ChatHeader from "@/app/pages/chats/chat-header";
import ChatFeed from "@/app/pages/chats/chat-feed";
import {SendMessageUsecase} from "@/usecases/send-message.usecase.ts";
import ChatsList from "@/app/pages/chats/chats-list/chats-list.comp.ts";
import ChatsListConnected from "@/app/pages/chats/chats-list";
import ChatFeedComp from "@/app/pages/chats/chat-feed/chat-feed.comp.ts";
import ChatSection from "@/app/pages/chats/chat-section/chat-section.comp.ts";
import ChatSectionConnected from "@/app/pages/chats/chat-section";


type ChatPageProps = BasicProps & {
    profileLink: Link;
    chatsList: ChatsList;
    chatSection: ChatSection;
}

class ChatPage extends Block<ChatPageProps> {

    public init() {
        super.init();
        new GetChatsUsercase().execute();
    }

    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    public addEvents() {
        super.addEvents();
        const add = this.getContent()?.querySelector(".add");
        if (add) {
            add.addEventListener("click", () => {
                DialogService.getInstance().open("Создать чат", new AddChat("div", {
                    form: new AddChatForm("form", {
                        events: {
                            submit: (event) => {
                                event.preventDefault();
                                new CreateChatUsecase().execute(event)
                                    .then(() => DialogService.getInstance().close());
                            }
                        }
                    })
                }))
            })
        }
    }
}

export default () => {
    const form = new SendForm("form", {
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                new SendMessageUsecase().execute(event);
                (event.target as HTMLFormElement).reset();
            },
        },
    });

    const profileLink = new Link("div", {
        href: "/profile",
        label: "Профиль",
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

    const chatsList = new ChatsListConnected("div", {
        chats: []
    });

    const chatHeader = new ChatHeader("div", {

    });

    const chatFeed = new ChatFeed("div", {
        messages: [],
        form
    }) as ChatFeedComp;

    const chatSection = new ChatSectionConnected("div", {
        attrs: {
            class: "chat"
        },
        activeChat: store.state.activeChat,
        chatHeader,
        chatFeed
    })

    return new ChatPage("div", {
        attrs: {
            class: "chats-grid",
        },
        chatsList,
        profileLink,
        chatSection
    });

};
