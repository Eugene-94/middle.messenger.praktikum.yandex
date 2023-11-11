import Block from "../../../core/block/block.ts";
import template from "./signup-form.tmp.ts";

class SignupForm extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default SignupForm;
