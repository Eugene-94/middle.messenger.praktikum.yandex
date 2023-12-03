import {Indexed} from "@core/types/indexed.type.ts";

export default (state: Indexed): Indexed => {
    return { activeChat: state.activeChat };
}
