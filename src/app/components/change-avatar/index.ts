import template from "./change-avatar.tmp.ts";
import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import ChangeAvatarForm from "@components/change-avatar/change-avatar-form";

type ChangeAvatarProps = BasicProps & {
    form: ChangeAvatarForm;
}

class ChangeAvatar extends Block<ChangeAvatarProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default ChangeAvatar;
