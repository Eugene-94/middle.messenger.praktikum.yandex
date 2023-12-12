import template from "./404.page.tmp.ts";
import BlockAbstract from "@core/block/block.abstract.ts";
import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";

class Page404 extends Block<BasicProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default (): BlockAbstract => {
    return new Page404("div", {
        attrs: {
            class: "error-page",
        },
    });
};
