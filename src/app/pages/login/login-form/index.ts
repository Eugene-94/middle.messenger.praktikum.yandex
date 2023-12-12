import template from "./login-form.tmp.ts";
import Block from "@/base-blocks/block.ts";

class LoginForm extends Block {

    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default LoginForm;
