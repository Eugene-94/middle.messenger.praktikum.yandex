import { HTTP_METHODS } from "./http-methods.enum.ts";
import { HTTPPayload, MethodOptions, ReqOptions } from "./http-service.types.ts";

type HTTPMethod = (url: string, options?: MethodOptions) => Promise<XMLHttpRequest>;

export function queryStringify(data: HTTPPayload) {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }

    if (data instanceof FormData) {
        return;
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
    }, "?");
}

export class HTTPTransport {

    private readonly _endPoint: string;

    constructor(private _apiPrefix: string) {
        this._endPoint = "https://ya-praktikum.tech/api/v2";
    }

    public get: HTTPMethod = (url, options): Promise<XMLHttpRequest> => {
        return this.request(
            `${this._endPoint}/${this._apiPrefix}${url}`,
            {...options, method: HTTP_METHODS.GET},
            options && options.timeout
        );
    }

    public post: HTTPMethod = (url, options): Promise<XMLHttpRequest> => {
        return this.request(
            `${this._endPoint}/${this._apiPrefix}${url}`,
            {...options, method: HTTP_METHODS.POST},
            options && options.timeout
        );
    }

    public put: HTTPMethod = (url, options): Promise<XMLHttpRequest> => {
        return this.request(
            `${this._endPoint}/${this._apiPrefix}${url}`,
            {...options, method: HTTP_METHODS.PUT},
            options && options.timeout
        );
    }

    public delete: HTTPMethod = (url, options): Promise<XMLHttpRequest> => {
        return this.request(
            `${this._endPoint}/${this._apiPrefix}${url}`,
            {...options, method: HTTP_METHODS.DELETE},
            options && options.timeout
        );
    }

    private request (url: string, options: ReqOptions, timeout = 5000): Promise<XMLHttpRequest> {
        const {headers = {}, method, data = {}, withCredentials = true, responseType = "json"} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
                reject("No method");
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === HTTP_METHODS.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.withCredentials = withCredentials;
            xhr.responseType = responseType;

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr);
                } else {
                    reject(xhr);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
