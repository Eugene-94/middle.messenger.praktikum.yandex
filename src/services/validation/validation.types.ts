import { ControlAbstract } from "@core/control/control.abstract.ts";

export type ValidationErrors = {
    [key: string]: any
};

export type ValidationFn = (c: ControlAbstract) => ValidationErrors | null;
