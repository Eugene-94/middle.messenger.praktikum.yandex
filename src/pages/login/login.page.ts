import template from "./login.page.tmp.ts";
import renderer from "../../renderer.ts";

export default () => {
    return renderer(template);
};
