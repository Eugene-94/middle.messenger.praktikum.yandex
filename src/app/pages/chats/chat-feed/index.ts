import mapper from "./chat-feed.mapper.ts";
import connector from "@data/store/connector.ts";
import ChatFeed from "@/app/pages/chats/chat-feed/chat-feed.comp.ts";
import "./chat-feed.scss";


const connected = connector(ChatFeed, mapper);

export default connected;
