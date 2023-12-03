import template from "./user-form.tmp.ts";
import { BasicProps } from "@core/block/block.types.ts";
import Button from "@components/button";
import UserInfoComponent from "@components/user-info/user-info.comp.ts";
import Block from "@/base-blocks/block.ts";

type UserFormProps = BasicProps & {
    submit: Button,
    userInfo: UserInfoComponent
};

class UserForm extends Block<UserFormProps> {

    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default UserForm;
