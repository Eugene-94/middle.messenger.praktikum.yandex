import template from "./500.page.tmp.ts";
import render from "../../utils/render.ts";
import Block from "../../core/block/block.ts";
import {BasicProps} from "../../core/block/block.types.ts";

class Page500 extends Block<BasicProps> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default () => {
    const page500 = new Page500("div", {
        attrs: {
            class: "error-page",
        },
    });

    render("#app", page500);
};
