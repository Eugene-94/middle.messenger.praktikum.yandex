import Block from "@/base-blocks/block.ts";
import {BasicProps} from "@core/block/block.types.ts";
import temp from "./add-chat-form.tmp.ts";

class AddChatForm extends Block<BasicProps> {
    render(): DocumentFragment {
        return this.compile(temp, this.props)
    }
}

export default AddChatForm;
