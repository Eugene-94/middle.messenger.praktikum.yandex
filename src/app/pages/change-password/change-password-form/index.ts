import template from "./change-password-form.tmp.ts";
import { FormProps } from "@components/common/types/form-props.type.ts";
import Block from "@/base-blocks/block.ts";

class ChangePasswordForm extends Block<FormProps> {

    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default ChangePasswordForm;
