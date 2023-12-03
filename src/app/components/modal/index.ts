import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import template from "./modal.tmp.ts";
import "./modal.scss";
import {DialogService} from "@services/dialog/dialog.service.ts";

type ModalProps = BasicProps & {
    component: Block,
    title: string,
}

class Modal extends Block<ModalProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    public addEvents() {
        super.addEvents();

        const closeBtn = this.element && this.element.querySelector(".modal__close");
        closeBtn?.addEventListener("click", () => {
            DialogService.getInstance().close();
        })
    }
}

export default Modal;
