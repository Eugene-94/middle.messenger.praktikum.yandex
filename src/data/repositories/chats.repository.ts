import HTTPTransport from "@services/http/http.service.ts";

export class ChatsRepository {

    private readonly _httpClient: HTTPTransport;

    constructor() {
        this._httpClient = new HTTPTransport("");
    }

    public getChats(): Promise<XMLHttpRequest> {
        return this._httpClient.get("chats");
    }

    public getChatUsers(id: number) {
        return this._httpClient.get(`chats/${id}/users`);
    }

    public createChat(title: string): Promise<XMLHttpRequest> {
        return this._httpClient.post("chats", { data: { title } });
    }

    public deleteChat(chatId: string): Promise<XMLHttpRequest> {
        return this._httpClient.delete("chats", { data: { chatId }});
    }

    public deleteUser(data: { chatId: number, users: number[]}) {
        return this._httpClient.delete("chats/users", { data });
    }

    public addUser(data: { users: number[], chatId: number}): Promise<XMLHttpRequest> {
        return this._httpClient.put("chats/users", { data });
    }

    public getToken(chatId: string): Promise<XMLHttpRequest> {
        return this._httpClient.post(`chats/token/${chatId}`);
    }

}
