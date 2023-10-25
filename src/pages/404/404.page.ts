import template from "./404.page.tmp.ts";
import renderer from "../../renderer.ts";

export default () => {
    return renderer(template);
};
