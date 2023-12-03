import mapper from "./chats-list.mapper.ts";
import connector from "@data/store/connector.ts";
import ChatsList from "@/app/pages/chats/chats-list/chats-list.comp.ts";

export default connector(ChatsList, mapper);
