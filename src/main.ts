import './style.scss';

import routesHandling from "./routing/router";
import registerPartials from "./partials.ts";


const app = () => {
  routesHandling();
  registerPartials();
};

document.addEventListener('DOMContentLoaded', app);
