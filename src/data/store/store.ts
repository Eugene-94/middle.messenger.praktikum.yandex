import EventBus from "@services/event-bus.ts";
import set from "@utils/set.ts";
import { Indexed } from "@core/types/indexed.type.ts";
import { StoreEvents } from "@/data/store/store-events.enum.ts";


class Store extends EventBus {

    private _state: Indexed = { };

    public get state(): Indexed {
        return this._state;
    }

    public set(path: string, value: unknown) {
        set(this._state, path, value);
        this.emit(StoreEvents.Updated);
    }
}

export default new Store();
