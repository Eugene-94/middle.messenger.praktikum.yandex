import temp from "./input.tmp.ts";
import { ValidationFn } from "@services/validation/validation.types.ts";
import { BasicProps } from "@core/block/block.types.ts";
import Control from "@/base-blocks/control.ts";

type InputProps = BasicProps & {
    type: "text" | "password" | "file";
    name?: string;
    label?: string;
    value?: unknown;
    readonly?: boolean;
    placeholder?: string;
}

export class Input extends Control<InputProps> {

    constructor(
        protected tagName: string,
        protected props: InputProps,
        public validators: ValidationFn[],
    ) {
        super(tagName, props, validators);
    }
    public override render(): DocumentFragment {

        return this.compile(temp, { ...this.props });

    }
}
