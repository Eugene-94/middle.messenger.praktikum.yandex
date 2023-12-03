import BlockAbstract from "@core/block/block.abstract.ts";

const appendBlock = (query: string, block: BlockAbstract) => {
    const root = document.querySelector(query);

    if (!root) {
        return null;
    }

    const content = block.getContent();
    content && root.appendChild(content as HTMLElement);

    block.dispatchComponentDidMount();

    return root;
};

export default appendBlock;