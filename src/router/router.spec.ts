import { expect } from "chai";
import Router from "./router.ts";
import {beforeEach} from "mocha";
import Block from "../base-blocks/block.ts";
import {BasicProps} from "../core/block/block.types.ts";


describe("Router tests", () => {
    let router: Router;
    let component: Block;

    class Component extends Block<BasicProps> {
        render(): DocumentFragment {
            return this.compile("<div></div>", this.props)
        }
    }

    beforeEach(() => {
        component = new Component("div", {});
        router = Router.getInstance("body");
        router
            .use("/404", () => component)
            .use("/login", () => component)
            .start();
    })

    it("should change history on navigate", () => {
        router.go("/login");
        expect(history.length).to.eq(3);
    });

    it("should change route", () => {
        router.go("/login");
        expect(window.location.href).to.be.equal(`https://localhost:3000/login`);
    });

    it("should redirect to 404 with non registered route", () => {
        router.go("/test");
        expect(window.location.href).to.be.equal(`https://localhost:3000/404`);
    });

});
