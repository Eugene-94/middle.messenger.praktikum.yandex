import "./style.scss";

import appInit from "./app/app.init.ts";

const app = (): void => {

    appInit();

};

document.addEventListener("DOMContentLoaded", app);
