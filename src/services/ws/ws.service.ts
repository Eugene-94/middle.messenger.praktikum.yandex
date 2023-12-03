import EventBus from "@services/event-bus.ts";
import {WSEvents} from "@services/ws/ws-events.enum.ts";

export class WSTransport extends EventBus {

    private _socket!: WebSocket;
    private _pingInterval?: ReturnType<typeof setInterval>;
    private readonly _pingIntervalTime = 30000;
    private static instance: WSTransport;

    public static createInstance(url: string): WSTransport {
        this.instance = new WSTransport(url);

        return this.instance
    }

    public static getInstance(): WSTransport {
        return this.instance;
    }

    private constructor(private _url: string) {
        super();
    }

    public send(data: string | number | object) {
        if (!this._socket) {
            throw Error();
        }
        this._socket.send(JSON.stringify(data));
    }

    public connect(): Promise<void> {
        if (this._socket) {
            throw Error("The socket is already connected");
        }

        this._socket = new WebSocket(this._url);
        this._subscribe(this._socket);
        this._setupPing();

        return new Promise((resolve, reject) => {
            this.on(WSEvents.Error, reject);
            this.on(WSEvents.Connected, () => {
                this.off(WSEvents.Error, reject);
                resolve();
            })
        })
    }

    public close(): void {
        if (this._socket) {
            this._socket?.close();
            clearInterval(this._pingInterval);
        }
    }

    private _setupPing() {
        this._pingInterval = setInterval(() => {
            this.send({ type: "ping "});
        }, this._pingIntervalTime);

        this.on(WSEvents.Close, () => {
            clearInterval(this._pingInterval);
            this._pingInterval = undefined;
        })
    }

    private _subscribe(socket: WebSocket) {
        socket.addEventListener("open", () => {
            this.emit(WSEvents.Connected);
        });

        socket.addEventListener("close", () => {
            this.emit(WSEvents.Close);
        });

        socket.addEventListener("error", (event) => {
            this.emit(WSEvents.Error, event);
        });

        socket.addEventListener("message", (message: MessageEvent<any>) => {
            try {
                const data = JSON.parse(message.data);
                if (["ping", "user connected", "error"].includes(data?.type)) {
                    return;
                }

                this.emit(WSEvents.Message, data);
            } catch (e) {

            }
        })
    }
}
