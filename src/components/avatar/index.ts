import Block from "../../core/block/block.ts";
import template from "./avatar.tmp.ts";
import "./avatar.scss";
import {BasicProps} from "../../core/block/block.types.ts";

type AvatarProps = BasicProps & {
    clickable?: boolean;
    src?: string;
}

class Avatar extends Block<AvatarProps> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Avatar;
