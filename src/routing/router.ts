import routes from "./routes";

export default () => {
    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        console.log(target.dataset)

        if (!target.dataset.route) {
            return;
        }

        const routeData = routes.get(target.dataset.route);

        console.log(routeData)

        if (routeData) {
            routeData.processor();
        }

    })
};
