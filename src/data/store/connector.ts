import { BasicProps } from "@core/block/block.types.ts";
import Block from "@/base-blocks/block.ts";
import store from "./store.ts";
import { StoreEvents } from "@/data/store/store-events.enum.ts";
import { Indexed } from "@core/types/indexed.type.ts";

function connector<T extends BasicProps>(
    Component: typeof Block<T>,
    mapper: (state: Indexed) => Indexed
): typeof Block<T> {
    return class extends Component {
        constructor(protected tagName: string, protected propsAndChildren: T) {
            super(tagName, propsAndChildren);

            store.on(StoreEvents.Updated, () => {
                this.setProps({ ...propsAndChildren, ...mapper(store.state) as T })
            })

        }
    }
}

export default connector;
