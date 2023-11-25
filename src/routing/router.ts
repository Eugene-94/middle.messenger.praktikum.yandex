import routes from "./routes.ts";

export default (): void => {
    document.addEventListener("click", (e: MouseEvent): void => {
        const target = e.target as HTMLElement;

        if (!target.dataset.route) {
            return;
        }

        const routeData = routes.get(target.dataset.route);

        if (routeData) {
            routeData.processor();
        }

    });
};
