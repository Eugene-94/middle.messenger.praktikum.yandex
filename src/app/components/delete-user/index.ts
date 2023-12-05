import {BasicProps} from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import temp from "./delete-user.tmp.ts";
import DeleteUserForm from "@components/delete-user/delete-user-form";

type DeleteUserProps = BasicProps & {
    form: DeleteUserForm
}
class DeleteUser extends Block<DeleteUserProps> {
    render(): DocumentFragment {
        return this.compile(temp, this.props);
    }
}

export default DeleteUser;
