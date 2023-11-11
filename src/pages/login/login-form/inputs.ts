import { Input } from "../../../components/input";
import { Validators } from "../../../services/validation/validator.service.ts";

const loginField = new Input(
    "div",
    {
        settings: {
            withInternalID: true
        },
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
        Validators.pattern(new RegExp(/^[a-zA-Z][a-zA-Z0-9_-]{3,20}$/)),
        Validators.required,
    ],
);

const passwordField = new Input(
    "div",
    {
        settings: {
            withInternalID: true,
        },
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
        Validators.pattern(/^(?=.*\d)(?=.*[A-ZА-Я])(?!.*[^a-zа-яA-ZА-Я0-9@#$^+=])(.{8,40})$/u),
    ],
);

export default [
    loginField,
    passwordField,
]
