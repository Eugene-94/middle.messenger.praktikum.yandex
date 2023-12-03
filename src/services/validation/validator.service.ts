import { ControlAbstract } from "@core/control/control.abstract.ts";
import { ValidationErrors, ValidationFn } from "./validation.types.ts";
import validationRegExps from "./validation-regexps.ts";

export class Validators {

    public static required(c: ControlAbstract): ValidationErrors | null {
        return requiredValidator(c);
    }

    public static email(c: ControlAbstract): ValidationErrors | null {
        return emailValidator(c);
    }

    public static pattern(pattern: RegExp): ValidationFn {
        return patternValidator(pattern);
    }
}

function requiredValidator(c: ControlAbstract): ValidationErrors | null {
    return isEmptyValue(c.value) ? { required: true } : null;
}

function emailValidator(c: ControlAbstract): ValidationErrors | null {
    if (isEmptyValue(c.value)) {
        return null;
    }
    return validationRegExps.email.test(c.value) ? null : { email: true };
}

export function patternValidator(pattern: RegExp): ValidationFn {
    return (c: ControlAbstract): ValidationErrors | null => {

        console.log("patternValidator", c)
        if (!pattern) {
            return null;
        }
        if (isEmptyValue(c.value)) {
            return null;
        }
        const { value } = c;
        console.log("value", value, pattern.test(value))
        return pattern.test(value) ? null
            : { pattern: { requiredPattern: pattern.toString(), actualValue: value } };
    };
}

function isEmptyValue(value: any): boolean {
    return value == null
        || ((typeof value === "string" || Array.isArray(value)) && value.length === 0);
}
