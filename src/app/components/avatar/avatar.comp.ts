import {BasicProps} from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import template from "@components/avatar/avatar.tmp.ts";

type AvatarProps = BasicProps & {
    clickable?: boolean;
    src?: string;
}

class Avatar extends Block<AvatarProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Avatar;
