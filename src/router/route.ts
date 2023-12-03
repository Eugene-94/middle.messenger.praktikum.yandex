import { RouteInterface } from "@core/routing/route.interface.ts";
import { BlockProcessor } from "@core/block/block-processor.type.ts";
import BlockAbstract from "@core/block/block.abstract.ts";
import render from "@utils/render.ts";

class Route implements RouteInterface {

    private _block: BlockAbstract | null = null;
    private _path: string;

    constructor(
        private _pathname: string,
        private _pageProcessor: BlockProcessor,
        private _props: any
    ) {
        this._path = this._pathname.slice(1).split("/")[0];
    }

    public navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    public leave(): void {

    }

    public match(pathname: string): boolean {
        const path = pathname.slice(1).split("/")[0];

        return path === this._path;
    }

    public render(): void {
        if (this._block) {
            render(this._props.rootQuery, this._block);
        } else {
            this._block = this._pageProcessor();
            render(this._props.rootQuery, this._block);
        }
    }

}

export default Route;
