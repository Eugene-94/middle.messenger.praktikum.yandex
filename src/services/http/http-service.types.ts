import {HTTP_METHODS} from "./http-methods.enum.ts";

export type HTTPPayload = {
    [key: string]: string
};

export type HTTPHeaders = {
    [key: string]: string
}

export type MethodOptions = {
    headers?: HTTPHeaders,
    data?: HTTPPayload,
    timeout?: number
}

export type ReqOptions = {
    method: HTTP_METHODS
} & MethodOptions;
