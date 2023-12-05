import {Usecase} from "@core/usecases/usecase.interface.ts";
import {WSTransport} from "@services/ws/ws.service.ts";

export class SendMessageUsecase implements Usecase<any> {
    execute(event: Event) {
        const formData = new FormData(event.target as HTMLFormElement);
        const data = (Object.fromEntries(formData.entries()) as { message: string });

        if (!data.message) {
            return;
        }

        const ws = WSTransport.getInstance();

        ws && ws.send({
            content: data.message,
            type: "message"
        })


    }
}
