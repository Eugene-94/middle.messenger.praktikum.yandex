import template from "./500.page.tmp.ts";
import render from "../../utils/render.ts";
import Block from "../../core/block/block.ts";

class Page500 extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default () => {
    const page500 = new Page500("div", {
        settings: {
            withInternalID: true,
        },
        attrs: {
            class: "error-page",
        },
    });

    render("#app", page500);
};
