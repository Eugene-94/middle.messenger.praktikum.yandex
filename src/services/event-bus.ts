type Callback = (...args: any[]) => void;
type Listeners = { [key: string]: Callback[] };

export default class {

    private listeners: Listeners = { };

    on(event: string, callback: Callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: Callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: Callback): boolean => listener !== callback,
        );
    }

    emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener: Callback) => {
            listener(...args);
        });
    }
}
