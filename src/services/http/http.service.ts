import { HTTP_METHODS } from "./http-methods.enum.ts";
import { HTTPPayload, MethodOptions, ReqOptions } from "./http-service.types.ts";

type HTTPMethod = (url: string, options?: MethodOptions) => Promise<unknown>;

function queryStringify(data: HTTPPayload) {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
    }, "?");
}

class HTTPTransport {
    public get: HTTPMethod = (url, options) => {
        return this.request(url, {...options, method: HTTP_METHODS.GET}, options && options.timeout);
    }

    public post: HTTPMethod = (url, options) => {
        return this.request(url, {...options, method: HTTP_METHODS.POST}, options && options.timeout);
    }

    public put: HTTPMethod = (url, options) => {
        return this.request(url, {...options, method: HTTP_METHODS.PUT}, options && options.timeout);
    }

    public delete: HTTPMethod = (url, options) => {
        return this.request(url, {...options, method: HTTP_METHODS.DELETE}, options && options.timeout);
    }

    private request (url: string, options: ReqOptions, timeout = 5000) {
        const {headers = {}, method, data = {}} = options;

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

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data as any);
            }
        });
    }
}

export default HTTPTransport;
