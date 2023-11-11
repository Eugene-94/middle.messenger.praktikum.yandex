import Block from "../../../core/block/block.ts";
import template from "./user-form.tmp.ts";

class UserForm extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default UserForm;