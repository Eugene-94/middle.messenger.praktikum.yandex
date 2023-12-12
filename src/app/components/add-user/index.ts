import {BasicProps} from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import temp from "./add-user.tmp.ts";
import AddUserForm from "@components/add-user/add-user-form";


type AddUserProps = BasicProps & {
    form: AddUserForm
}
class AddUser extends Block<AddUserProps> {
    render(): DocumentFragment {
        return this.compile(temp, this.props);
    }
}

export default AddUser;
