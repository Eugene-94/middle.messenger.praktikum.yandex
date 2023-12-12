export type MessageType = {
    chat_id: number;
    time: string;
    type: "message" | "file";
    user_id: number;
    content: string;
};
