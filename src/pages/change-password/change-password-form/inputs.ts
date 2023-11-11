import {Input} from "../../../components/input";
import {Validators} from "../../../services/validation/validator.service.ts";

const oldPass = new Input(
    "div",
    {
        settings: {
            withInternalID: true,
        },
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
        Validators.pattern(/^(?=.*\d)(?=.*[A-ZА-Я])(?!.*[^a-zа-яA-ZА-Я0-9@#$^+=])(.{8,40})$/u),
    ],
);

const newPass = new Input(
    "div",
    {
        settings: {
            withInternalID: true,
        },
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
        Validators.pattern(/^(?=.*\d)(?=.*[A-ZА-Я])(?!.*[^a-zа-яA-ZА-Я0-9@#$^+=])(.{8,40})$/u),
    ],
);

const repeatNewPass = new Input(
    "div",
    {
        settings: {
            withInternalID: true,
        },
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
        Validators.pattern(/^(?=.*\d)(?=.*[A-ZА-Я])(?!.*[^a-zа-яA-ZА-Я0-9@#$^+=])(.{8,40})$/u),
    ],
);

export default [oldPass, newPass, repeatNewPass];
