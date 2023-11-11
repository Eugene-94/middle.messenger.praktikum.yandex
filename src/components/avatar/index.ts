import Block from "../../core/block/block.ts";
import template from "./avatar.tmp.ts";
import "./avatar.scss";

class Avatar extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Avatar;
