import Modal from "@components/modal";
import appendBlock from "@utils/appendBlock.ts";
import Block from "@/base-blocks/block.ts";
import removeBlock from "@utils/removeBlock.ts";

export class DialogService {

    private _modal: Modal | null = null;
    private static _instance: DialogService | undefined;

    private constructor() {
    }

    public static getInstance(): DialogService {
        if (!this._instance) {
            this._instance = new DialogService();
        }

        return this._instance;
    }

    public open(title: string, component: Block): void {
        this._modal = new Modal("div", {
            title,
            component
        });
        appendBlock("body", this._modal);
    }

    public close(): void {
        if (this._modal) {
            removeBlock(this._modal);
            this._modal = null;
        }
    }
}