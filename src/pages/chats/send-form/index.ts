import Block from "../../../core/block/block.ts";
import template from "./send-form.tmp.ts";
import { FormProps } from "../../../components/common/types/form-props.type.ts";

class SendForm extends Block<FormProps> {
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default SendForm;
