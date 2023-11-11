import Block from "../../../core/block/block.ts";
import template from "./send-form.tmp.ts";

class SendForm extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default SendForm;
