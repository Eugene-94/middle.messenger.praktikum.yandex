import BlockAbstract from "@core/block/block.abstract.ts";

const removeBlock = (block: BlockAbstract) => {
    const content = block.getContent();

    if (content) {
        content.remove();
    }
};

export default removeBlock;
