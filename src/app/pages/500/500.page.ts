import { BasicProps } from "@core/block/block.types.ts";
import template from "./500.page.tmp.ts";
import Block from "@/base-blocks/block.ts";

class Page500 extends Block<BasicProps>{
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}

export default () => {
    return new Page500("div", {
        attrs: {
            class: "error-page",
        },
    });
};
