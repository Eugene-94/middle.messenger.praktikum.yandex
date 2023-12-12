import template from "./change-avatar-form.tmp.ts";
import Block from "@/base-blocks/block.ts";

class ChangeAvatarForm extends Block {

    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default ChangeAvatarForm;
