import { RouterInterface } from "@core/routing/router.interface.ts";
import { BlockProcessor } from "@core/block/block-processor.type.ts";
import Route from "./route.ts";

class Router implements RouterInterface<Router> {

    private static instance: Router | undefined;

    private routes: Route[] = [];
    private history: History = window.history;
    private _currentRoute: Route | null = null;

    public static getInstance(root: string): Router {
        if (!this.instance) {
            this.instance = new Router(root);
        }

        return this.instance;
    }

    protected constructor(private _rootQuery: string) {
        this.routes = [];
    }

    public use(path: string, pageProcessor: BlockProcessor): Router {
        const route: Route = new Route(path, pageProcessor, { rootQuery: this._rootQuery });
        this.routes.push(route);

        return this;
    }

    public start() {
        window.onpopstate = (event: PopStateEvent) => {
            if (event.currentTarget) {
                this._onRoute(event.currentTarget && (event.currentTarget as Window).location.pathname);
            }
        }

        this._onRoute(window.location.pathname);
    }

    public go(path: string): void {
        this.history.pushState({}, "", path);
        this._onRoute(path);
    }

    public back(): void {
        this.history.back();
    }

    public forward(): void {
        this.history.forward();
    }

    protected _onRoute(pathname: string): void {
        const route = this._getRoute(pathname);

        if (!route) {
            this.go("/404");
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        this._currentRoute.render();
    }

    private _getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname));
    }

}

export default Router;
