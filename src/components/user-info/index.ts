import Block from "../../core/block/block.ts";
import template from "./user-info.tmp.ts";
import {Input} from "../input";
import {UserInfo} from "../../core/user/user-info.type.ts";
import {Validators} from "../../services/validation/validator.service.ts";
import {Props} from "../../core/block/block.types.ts";
import {ValidationFn} from "../../services/validation/validation.types.ts";

class UserInfoComponent extends Block {

    constructor(tagName: string, props: Props) {
        super(tagName, props);
    }


    public render(): DocumentFragment {
        this._labels = new Map<string, string>([
            ["first_name", "Имя"],
            ["second_name", "Фамилия"],
            ["email", "Почта"],
            ["login", "Логин"],
            ["display_name", "Имя в чате"],
            ["phone", "Телефон"],
        ]);

        const inputs = this._createField(this.props.userInfo);

        this.lists = {...this.lists, inputs };

        return this.compile(template, {...this.props, inputs });
    }

    private _createField(userInfo: UserInfo): Input[] {
        const inputs: Input[] = [];

        Object.entries(userInfo).forEach(([key, value]) => {
            const validators: ValidationFn[] = [Validators.required];
            switch (key) {
            case "first_name":
            case "second_name":
            case "display_name":
                validators.push(Validators.pattern(new RegExp(/^[A-ZА-ЯЁ][a-za-яё-]+$/ug)));
                break;
            case "email":
                validators.push(Validators.email)
                break;
            case "login":
                validators.push(Validators.pattern(new RegExp(/^[a-zA-Z][a-zA-Z0-9_-]{3,20}$/)));
                break;
            case "phone":
                validators.push(Validators.pattern(new RegExp(/^[+]?\d+/)));
                break;
            default:
                throw Error(`unknown field type: ${key}`)
            }

            const input = new Input(
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
                            input.updateValue();
                            input.runValidators();
                        },
                    },
                    label: this._labels.get(key) as string,
                    type: "text",
                    name: key,
                    value,
                    readonly: this.props.readonly,
                    placeholder: "Введите",
                },
                validators,
            )

            inputs.push(input);
        })

        return inputs;
    }
}

export default UserInfoComponent;
