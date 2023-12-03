import { ControlAbstract } from "@core/control/control.abstract.ts";

class Control<Props extends Record<string, any> = any> extends ControlAbstract<Props> {
    public render(): DocumentFragment {
        const temp: HTMLTemplateElement = document.createElement("template");
        return temp.content;
    }
}

export default Control;
