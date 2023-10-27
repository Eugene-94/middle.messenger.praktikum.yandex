import template from "./change-password.page.tmp.ts";
import renderer from "../../renderer.ts";
import './change-password.scss';

export default () => {
    return renderer(template);
};
