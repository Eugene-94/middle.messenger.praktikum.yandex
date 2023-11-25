import Block from "../core/block/block.ts";

const render = (query: string, block: Block) => {
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
