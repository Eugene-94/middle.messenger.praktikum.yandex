import BlockAbstract from "../core/block/block.abstract.ts";

class Block<Props extends Record<string, any> = any> extends BlockAbstract<Props> {

    public render(): DocumentFragment {
        const temp: HTMLTemplateElement = document.createElement("template");
        return temp.content;
    }

}

export default Block;
