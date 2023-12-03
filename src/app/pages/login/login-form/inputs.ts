import { Input } from "@components/input";
import { Validators } from "@services/validation/validator.service.ts";
import validationRegexps from "@services/validation/validation-regexps.ts";

export default () => {
    const loginField = new Input(
        "div",
        {
            attrs: {
                class: "login__form-control form-control"
            },
            events: {
                blur: () => {
                    loginField.updateValue();
                    loginField.runValidators();
                }
            },
            label: "Логин",
            type: "text",
            name: "login",
            placeholder: "Введите"
        },
        [
            Validators.required,
            Validators.pattern(validationRegexps.login),
        ],
    );

    const passwordField = new Input(
        "div",
        {
            attrs: {
                class: "login__form-control form-control"
            },
            events: {
                blur: () => {
                    passwordField.updateValue();
                    passwordField.runValidators();
                }
            },
            label: "Пароль",
            type: "password",
            name: "password",
            placeholder: "Введите",
        },
        [
            Validators.required,
            Validators.pattern(validationRegexps.password),
        ],
    );

    return [loginField, passwordField]
}
