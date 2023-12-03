import {HTTP_METHODS} from "./http-methods.enum.ts";

export type HTTPPayload = {
    [key: string]: string | string[] | number | number[]
} | FormData;

export type HTTPHeaders = {
    [key: string]: string
}

export type MethodOptions = {
    headers?: HTTPHeaders,
    data?: HTTPPayload,
    timeout?: number,
    withCredentials?: boolean,
    responseType?: XMLHttpRequestResponseType,
}

export type ReqOptions = {
    method: HTTP_METHODS
} & MethodOptions;
