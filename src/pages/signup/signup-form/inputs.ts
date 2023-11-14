import { Input } from "../../../components/input";
import { Validators } from "../../../services/validation/validator.service.ts";
import validationRegexps from "../../../services/validation/validation-regexps.ts";

export default () => {
    const emailField = new Input(
        "div",
        {
            attrs: {
                class: "signup__form-control form-control",
            },
            events: {
                blur: () => {
                    emailField.updateValue();
                    emailField.runValidators();
                },
            },
            label: "Почта",
            type: "text",
            name: "login",
            placeholder: "Введите",
        },
        [Validators.email, Validators.required],
    );

    const loginField = new Input(
        "div",
        {
            attrs: {
                class: "signup__form-control form-control",
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
            placeholder: "Введите",
        },
        [
            Validators.pattern(validationRegexps.login),
            Validators.required,
        ],
    );

    const firstNameField = new Input(
        "div",
        {
            attrs: {
                class: "signup__form-control form-control",
            },
            events: {
                blur: () => {
                    firstNameField.updateValue();
                    firstNameField.runValidators();
                },
            },
            label: "Имя",
            type: "text",
            name: "first_name",
            placeholder: "Введите",
        },
        [
            Validators.pattern(validationRegexps.name),
            Validators.required
        ],
    );

    const secondNameField = new Input(
        "div",
        {
            attrs: {
                class: "signup__form-control form-control"
            },
            events: {
                blur: () => {
                    secondNameField.updateValue();
                    secondNameField.runValidators();
                },
            },
            label: "Фамилия",
            type: "text",
            name: "second_name",
            placeholder: "Введите",
        },
        [
            Validators.pattern(validationRegexps.name),
            Validators.required
        ],
    );

    const phoneField = new Input(
        "div",
        {
            attrs: {
                class: "signup__form-control form-control"
            },
            events: {
                blur: () => {
                    phoneField.updateValue();
                    phoneField.runValidators();
                }
            },
            label: "Телефон",
            type: "text",
            name: "phone",
            placeholder: "Введите"
        },
        [
            Validators.required,
            Validators.pattern(validationRegexps.phone),
        ],
    );

    const passwordField = new Input(
        "div",
        {
            attrs: {
                class: "signup__form-control form-control"
            },
            events: {
                blur: () => {
                    passwordField.updateValue();
                    passwordField.runValidators();
                },
            },
            label: "Пароль",
            type: "password",
            name: "password",
            placeholder: "Введите",
        },
        [
            Validators.pattern(validationRegexps.password),
            Validators.required,
        ],
    )

    const passwordCheckField = new Input(
        "div",
        {
            attrs: {
                class: "signup__form-control form-control"
            },
            events: {
                blur: () => {
                    passwordCheckField.updateValue();
                    passwordCheckField.runValidators();
                },
            },
            label: "Подтвердите пароль",
            type: "password",
            name: "password_check",
            placeholder: "Введите",
        },
        [
            Validators.pattern(validationRegexps.password),
            Validators.required,
        ],
    )

    return [
        emailField,
        loginField,
        firstNameField,
        secondNameField,
        phoneField,
        passwordField,
        passwordCheckField,
    ]
}
