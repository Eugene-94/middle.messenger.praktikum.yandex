import template from "./profile.page.tmp.ts";
import renderer from "../../renderer.ts";

const data = {
    userInfo: {
        email: "pochta@yandex.ru",
        login: "ivanivanov",
        first_name: "Иван",
        second_name: "Иванов",
        phone: "+79099673030",
        display_name: 'Иван'
    }
}

export default () => {
    return renderer(template, data);
};