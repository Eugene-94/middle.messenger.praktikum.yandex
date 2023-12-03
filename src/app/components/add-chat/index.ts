import {BasicProps} from "@core/block/block.types.ts";
import AddChatForm from "@components/add-chat/add-chat-form";
import Block from "@/base-blocks/block.ts";
import temp from "./add.chat.tmp.ts";

type AddChatProps = BasicProps & {
    form: AddChatForm
}
class AddChat extends Block<AddChatProps> {
    render(): DocumentFragment {
        return this.compile(temp, this.props);
    }
}

export default AddChat;
