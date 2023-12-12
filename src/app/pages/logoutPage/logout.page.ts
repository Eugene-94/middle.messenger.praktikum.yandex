import Block from "@/base-blocks/block.ts";
import {BasicProps} from "@core/block/block.types.ts";
import temp from "./logout.page.tmp.ts";
import {LogoutUsecase} from "@/usecases/logout.usecase.ts";

class LogoutPage extends Block<BasicProps> {

    init() {
        super.init();
    }

    render(): DocumentFragment {
        new LogoutUsecase().execute();
        return this.compile(temp, this.props);
    }
}

export default () => {
    return new LogoutPage("div", {})
}
