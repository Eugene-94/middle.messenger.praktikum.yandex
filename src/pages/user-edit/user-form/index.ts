import Block from "../../../core/block/block.ts";
import template from "./user-form.tmp.ts";
import { BasicProps } from "../../../core/block/block.types.ts";
import Button from "../../../components/button";
import UserInfoComponent from "../../../components/user-info";

type UserFormProps = BasicProps & {
    submit: Button,
    userInfo: UserInfoComponent
};

class UserForm extends Block<UserFormProps> {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default UserForm;
