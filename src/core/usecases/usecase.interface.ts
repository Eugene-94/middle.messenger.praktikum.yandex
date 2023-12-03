export type Usecase<T> = {
    execute(...params: unknown[]): T;
}
