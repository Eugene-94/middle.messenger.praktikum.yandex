import { Control } from "../../core/control/control.ts";
import { ValidationErrors, ValidationFn } from "./validation.types.ts";
import validationRegExps from "./validation-regexps.ts";

export class Validators {

    public static required(c: Control): ValidationErrors | null {
        return requiredValidator(c);
    }

    public static email(c: Control): ValidationErrors | null {
        return emailValidator(c);
    }

    public static pattern(pattern: RegExp): ValidationFn {
        return patternValidator(pattern);
    }
}

function requiredValidator(c: Control): ValidationErrors | null {
    return isEmptyValue(c.value) ? { required: true } : null;
}

function emailValidator(c: Control): ValidationErrors | null {
    if (isEmptyValue(c.value)) {
        return null;
    }
    return validationRegExps.email.test(c.value) ? null : { email: true };
}

export function patternValidator(pattern: RegExp): ValidationFn {
    return (c: Control): ValidationErrors | null => {
        if (!pattern) {
            return null;
        }
        if (isEmptyValue(c.value)) {
            return null;
        }
        const { value } = c;
        return pattern.test(value) ? null
            : { pattern: { requiredPattern: pattern.toString(), actualValue: value } };
    };
}

function isEmptyValue(value: any): boolean {
    return value == null
        || ((typeof value === "string" || Array.isArray(value)) && value.length === 0);
}
