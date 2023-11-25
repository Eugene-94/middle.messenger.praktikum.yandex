import {Input} from "../../../components/input";
import {Validators} from "../../../services/validation/validator.service.ts";
import validationRegexps from "../../../services/validation/validation-regexps.ts";

export default () => {
    const oldPass = new Input(
        "div",
        {
            attrs: {
                class: "form-control"
            },
            events: {
                blur: () => {
                    oldPass.updateValue();
                    oldPass.runValidators();
                }
            },
            label: "Старый пароль",
            type: "password",
            name: "oldPassword",
            placeholder: "Введите",
        },
        [
            Validators.required,
            Validators.pattern(validationRegexps.password),
        ],
    );

    const newPass = new Input(
        "div",
        {
            attrs: {
                class: "form-control"
            },
            events: {
                blur: () => {
                    newPass.updateValue();
                    newPass.runValidators();
                }
            },
            label: "Новый пароль",
            type: "password",
            name: "newPassword",
            placeholder: "Введите",
        },
        [
            Validators.required,
            Validators.pattern(validationRegexps.password),
        ],
    );

    const repeatNewPass = new Input(
        "div",
        {
            attrs: {
                class: "form-control",
            },
            events: {
                blur: () => {
                    repeatNewPass.updateValue();
                    repeatNewPass.runValidators();
                }
            },
            label: "Повторите новый пароль",
            type: "password",
            name: "newPasswordRepeat",
            placeholder: "Введите",
        },
        [
            Validators.required,
            Validators.pattern(validationRegexps.password),
        ],
    );

    return [oldPass, newPass, repeatNewPass];
}
