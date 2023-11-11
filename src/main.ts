import './style.scss';

import routesHandling from './routing/router';

const app = () => {
    routesHandling();
};

document.addEventListener('DOMContentLoaded', app);
