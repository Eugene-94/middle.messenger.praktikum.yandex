import Block from "../../../core/block/block.ts";
import template from "./change-password-form.tmp.ts";

class ChangePasswordForm extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default ChangePasswordForm;
