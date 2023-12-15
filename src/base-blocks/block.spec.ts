import Block from "./block.ts";
import { BasicProps } from "../core/block/block.types.ts";
import {afterEach, beforeEach} from "mocha";
import {expect} from "chai";

describe("Component", () => {
    class Component extends Block<{title: string} & BasicProps> {
        public render(): DocumentFragment {
            return this.compile("<h1>{{ title }}</h1>", this.props);
        }
    }

    let component: Component;

    beforeEach(() => {
        component = new Component("div", {
            title: "Hello"
        });
    });

    afterEach(() => {
        global.document.body.innerHTML = "";
    })

    it("should render block with given props", () => {
        const body = global.document.body;
        if (component.getContent()) {
            body.appendChild(component.getContent() as HTMLElement)
        }

        expect(global.document.querySelector("h1")?.textContent).to.eq("Hello")
    });

    it("should rerender template on props changing", () => {
        const body = global.document.body;
        if (component.getContent()) {
            body.appendChild(component.getContent() as HTMLElement)
        }

        component.setProps({ title: "changed"});

        expect(global.document.querySelector("h1")?.textContent).to.eq("changed")
    })


});
