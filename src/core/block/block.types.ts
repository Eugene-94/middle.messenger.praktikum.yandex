import Block from "./block.ts";

export type BlockMeta = {
    tagName: string;
    props: Props;
};

export type Props = {
    [key: string]: any;
};

export type PropsEvents = {
    [key: string]: (event: Event) => void;
} | object;

export type BlockChildren = {
    [key: string]: Block
};

export type BlockLists = {
    [key: string]: any[]
}

export type PropsAndChildren = {
    [key: string]: number | string | boolean | PropsEvents | Block | any[];
}
