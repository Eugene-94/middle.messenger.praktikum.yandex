import connector from "@data/store/connector.ts";
import mapper from "./chat-header.mapper.ts";
import ChatHeader from "@/app/pages/chats/chat-header/chat-header.comp.ts";

export default connector(ChatHeader, mapper);
