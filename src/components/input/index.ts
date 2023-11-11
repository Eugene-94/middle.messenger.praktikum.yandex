import temp from "./input.tmp.ts";
import { Control } from "../../core/control/control.ts";
import { PropsAndChildren } from "../../core/block/block.types.ts";
import { ValidationFn } from "../../services/validation/validation.types.ts";

export class Input extends Control {

    constructor(
        protected tagName: string,
        protected props: PropsAndChildren,
        public validators: ValidationFn[],
    ) {
        super(tagName, props, validators);
    }
    public render(): DocumentFragment {

        return this.compile(temp, { ...this.props });

    }
}
