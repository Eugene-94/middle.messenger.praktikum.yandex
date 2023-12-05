import Block from "@/base-blocks/block.ts";
import {BasicProps} from "@core/block/block.types.ts";
import temp from "./delete-user-form.ts";
import {UserType} from "@core/types/user.type.ts";
import "./delete-user-form.scss";


type DeleteUserFormProps = BasicProps & {
    chatUsers: { users: UserType[] };
}

class DeleteUserForm extends Block<DeleteUserFormProps> {
    public override render(): DocumentFragment {
        return this.compile(temp, this.props);
    }
}

export default DeleteUserForm;
