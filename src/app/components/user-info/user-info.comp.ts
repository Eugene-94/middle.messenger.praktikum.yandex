import {BasicProps} from "@core/block/block.types.ts";
import {UserType} from "@core/types/user.type.ts";
import {Input} from "@components/input";
import Block from "@/base-blocks/block.ts";
import template from "@components/user-info/user-info.tmp.ts";
import {ValidationFn} from "@services/validation/validation.types.ts";
import {Validators} from "@services/validation/validator.service.ts";
import validationRegexps from "@services/validation/validation-regexps.ts";

type UserInfoProps = BasicProps & {
    userInfo?: UserType,
    inputs?: Input[],
    readonly?: boolean
}

class UserInfoComponent extends Block<UserInfoProps> {

    public override render(): DocumentFragment {
        const inputs = this.props.userInfo && this._createField(this.props.userInfo);

        if (inputs) {
            this.lists = {...this.lists, inputs };
        }

        return this.compile(template, {...this.props, inputs });
    }

    private _createField(userInfo: UserType): Input[] {
        const inputs: Input[] = [];

        const labels = new Map<string, string>([
            ["first_name", "Имя"],
            ["second_name", "Фамилия"],
            ["email", "Почта"],
            ["login", "Логин"],
            ["display_name", "Имя в чате"],
            ["phone", "Телефон"],
        ]);

        Object.entries(userInfo).forEach(([key, value]) => {
            if (!labels.has(key)) {
                return;
            }
            const validators: ValidationFn[] = [Validators.required];
            switch (key) {
            case "first_name":
            case "second_name":
            case "display_name":
                validators.push(Validators.pattern(validationRegexps.name));
                break;
            case "email":
                validators.push(Validators.email)
                break;
            case "login":
                validators.push(Validators.pattern(validationRegexps.login));
                break;
            case "phone":
                validators.push(Validators.pattern(validationRegexps.phone));
                break;
            default:
                throw Error(`unknown field type: ${key}`)
            }

            const input = new Input(
                "div",
                {
                    attrs: {
                        class: "form-control",
                    },
                    events: {
                        blur: () => {
                            input.updateValue();
                            input.runValidators();
                        },
                    },
                    label: labels.get(key) as string,
                    type: "text",
                    name: key,
                    value,
                    readonly: Boolean(this.props.readonly),
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
