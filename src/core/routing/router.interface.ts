import { BlockProcessor } from "../block/block-processor.type.ts";

export interface RouterInterface<T> {
    use: (path: string, blockProcessor: BlockProcessor) => T;
    start: () => void;
    go: (path: string) => void;
    back: () => void;
    forward: () => void;
}
