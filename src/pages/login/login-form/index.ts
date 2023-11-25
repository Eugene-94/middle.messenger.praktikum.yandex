import Block from "../../../core/block/block.ts";
import template from "./login-form.tmp.ts";

class LoginForm extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default LoginForm;
