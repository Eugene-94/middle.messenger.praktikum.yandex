import BlockAbstract from "./block.abstract.ts";

export type BlockMeta<T> = {
    tagName: string;
    props: T;
};

export type PropsEvents = {
    [key: string]: (event: Event) => void;
};

export type BlockChildren = {
    [key: string]: BlockAbstract<any>;
};

export type BlockLists = {
    [key: string]: unknown[];
};

export type BasicProps = {
    settings?: {
        withInternalID?: boolean
    },
    attrs?: {
        class?: string,
        id?: string
    },
    events?: PropsEvents
};
