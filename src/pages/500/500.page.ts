import template from "./500.page.tmp.ts";
import renderer from "../../renderer.ts";

export default () => {
    return renderer(template);
};
