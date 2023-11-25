import { Control } from "../../core/control/control.ts";

export type ValidationErrors = {
    [key: string]: any
};

export type ValidationFn = (c: Control) => ValidationErrors | null;
