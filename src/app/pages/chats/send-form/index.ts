import template from "./send-form.tmp.ts";
import { FormProps } from "@components/common/types/form-props.type.ts";
import Block from "@/base-blocks/block.ts";

class SendForm extends Block<FormProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default SendForm;
