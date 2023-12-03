import {BasicProps} from "@core/block/block.types.ts";
import {ChatType} from "@core/types/chat.type.ts";
import Block from "@/base-blocks/block.ts";
import temp from "@/app/pages/chats/chat-header/chat-header.tmp.ts";
import {DeleteChatUsecase} from "@/usecases/delete-chat.usecase.ts";
import store from "@data/store/store.ts";
import {DialogService} from "@services/dialog/dialog.service.ts";
import AddUser from "@components/add-user";
import AddUserForm from "@components/add-user/add-user-form";
import {AddUserUsecase} from "@/usecases/add-user.usecase.ts";

type ChatHeaderProps = BasicProps & {
    chat?: ChatType | null
}

class ChatHeader extends Block<ChatHeaderProps> {

    public override render(): DocumentFragment {

        return this.compile(temp, this.props);
    }

    public addEvents() {
        super.addEvents();

        const delBtn = this.getContent()?.querySelector(".delete-chat");
        if (delBtn) {
            delBtn.addEventListener("click", () => {
                new DeleteChatUsecase().execute(String(store.state.activeChat.id));
            })
        }
        const addBtn = this.getContent()?.querySelector(".add-user");
        if (addBtn) {
            addBtn.addEventListener("click", () => {
                DialogService.getInstance().open(
                    "Добавить пользователя",
                    new AddUser("div", {
                        form: new AddUserForm("form", {
                            events: {
                                submit: (event => {
                                    event.preventDefault();
                                    new AddUserUsecase().execute(event).then();
                                })
                            }
                        })
                    })
                )
            })
        }
    }

}

export default ChatHeader;
