import Block from "../../../core/block/block.ts";
import template from "./signup-form.tmp.ts";
import {FormProps} from "../../../components/common/types/form-props.type.ts";

class SignupForm extends Block<FormProps> {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default SignupForm;
