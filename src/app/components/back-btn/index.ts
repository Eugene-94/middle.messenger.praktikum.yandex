import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import temp from "./back-btn.tmp.ts";
import "./back-btn.scss";
import Router from "@/router/router.ts";

class BackBtn extends Block<BasicProps> {
    public override render(): DocumentFragment {
        return this.compile(temp, this.props);
    }

    addEvents() {
        super.addEvents();

        const btn = this.getContent()?.querySelector(".back-btn");

        if (btn) {
            btn.addEventListener("click", () => {
                Router.getInstance("#app").back();
            })
        }
    }
}

export default BackBtn;
