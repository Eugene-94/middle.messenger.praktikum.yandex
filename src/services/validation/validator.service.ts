import { Control } from "../../core/control/control.ts";
import { ValidationErrors, ValidationFn } from "./validation.types.ts";

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

const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function requiredValidator(c: Control): ValidationErrors | null {
    return isEmptyValue(c.value) ? { required: true } : null;
}

function emailValidator(c: Control): ValidationErrors | null {
    if (isEmptyValue(c.value)) {
        return null;
    }
    return EMAIL_REGEXP.test(c.value) ? null : { email: true };
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
