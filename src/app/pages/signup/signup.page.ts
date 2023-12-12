import { BasicProps } from "@core/block/block.types.ts";
import SignupForm from "./signup-form";
import Button from "../../components/button";
import formInputs from "./signup-form/inputs.ts";
import template from "./signup.page.tmp.ts";
import "./signup.page.scss";
import Link from "@components/link";
import Router from "../../../router/router.ts";
import {SignupUsecase} from "@/usecases/signup.usecase.ts";
import Block from "@/base-blocks/block.ts";


type SignupPageProps = BasicProps & {
    form: SignupForm,
    link: Link
};

class SignupPage extends Block<SignupPageProps> {
    public override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default () => {

    const submit = new Button("div", {
        attrs: {
            class: "flex flex-center",
        },
        label: "Зарегистрироваться",
        type: "Submit",
    });

    const inputs = formInputs();

    const signupForm = new SignupForm("form", {
        attrs: {
            class: "signup__form",
        },
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                inputs.forEach((input) => {
                    input.updateValue();
                    input.runValidators();
                });
                const usecase = new SignupUsecase();
                usecase.execute(event);
            },
        },
        inputs,
        submit,
    });

    const link = new Link("div", {
        href: "/",
        label: "Войти",
        events: {
            click: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                if (target.dataset.route) {
                    Router.getInstance("#app").go(target.dataset.route);
                }

            }
        }
    })

    return new SignupPage("div", {
        attrs: {
            class: "signup-page",
        },
        form: signupForm,
        link
    });
};
