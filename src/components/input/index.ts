import temp from "./input.tmp.ts";
import { Control } from "../../core/control/control.ts";
import { ValidationFn } from "../../services/validation/validation.types.ts";
import {BasicProps} from "../../core/block/block.types.ts";

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
    public render(): DocumentFragment {

        return this.compile(temp, { ...this.props });

    }
}
