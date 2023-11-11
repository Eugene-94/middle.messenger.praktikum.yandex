import {Input} from "../../../components/input";
import {Validators} from "../../../services/validation/validator.service.ts";

const oldPass = new Input('div', {
        settings: {
            withInternalID: true
        },
        attrs: {
            class: 'form-control'
        },
        events: {
            'blur': () => {
                oldPass.updateValue();
                oldPass.runValidators();
            }
        },
        label: 'Старый пароль',
        type: 'password',
        name: "oldPassword",
        placeholder: "Введите"
    },
    [Validators.required],
);

const newPass = new Input('div', {
        settings: {
            withInternalID: true
        },
        attrs: {
            class: 'form-control'
        },
        events: {
            'blur': () => {
                newPass.updateValue();
                newPass.runValidators();
            }
        },
        label: 'Новый пароль',
        type: 'password',
        name: "newPassword",
        placeholder: "Введите"
    },
    [Validators.required],
);

const repeatNewPass = new Input('div', {
        settings: {
            withInternalID: true
        },
        attrs: {
            class: 'form-control'
        },
        events: {
            'blur': () => {
                repeatNewPass.updateValue();
                repeatNewPass.runValidators();
            }
        },
        label: 'Повторите новый пароль',
        type: 'password',
        name: "newPasswordRepeat",
        placeholder: "Введите"
    },
    [Validators.required],
);

export default [oldPass, newPass, repeatNewPass];
