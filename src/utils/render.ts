import BlockAbstract from "@core/block/block.abstract.ts";

const render = (query: string, block: BlockAbstract) => {
    const root = document.querySelector(query);

    if (!root) {
        return null;
    }

    const content = block.getContent();
    root.innerHTML = "";
    content && root.appendChild(content as HTMLElement);

    block.dispatchComponentDidMount();

    return root;
};

export default render;
