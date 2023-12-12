import mapper from "./chat-section.mapper.ts";
import connector from "@data/store/connector.ts";
import ChatSection from "@/app/pages/chats/chat-section/chat-section.comp.ts";

export default connector(ChatSection, mapper);
