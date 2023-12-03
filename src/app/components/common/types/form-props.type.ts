import {BasicProps} from "@core/block/block.types.ts";
import {Input} from "../../input";
import Button from "../../button";

export type FormProps = BasicProps & {
    inputs?: Input[];
    submit?: Button
};
