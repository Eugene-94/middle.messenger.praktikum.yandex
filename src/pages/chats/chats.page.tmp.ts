export default `
    <div class="chats-grid">
        <div class="contacts">
            <div class="contacts__search">
                <input type="text" class="input-text contacts__search-field" placeholder="Поиск">
            </div>

            {{> contact }}
            <hr>
            {{> contact }}
            <hr>
            {{> contact }}
        </div>
        <div class="chat">
            <div class="chat__title-block">
                <figure class="chat__photo"></figure>
                <h3 class="chat__contact">Иван</h3>
            </div>
            <div class="chat__feed">
                {{#each messages}}
                    {{> message this }}
                {{/each}}
                {{> message }}
            </div>
            <div class="chat__post-block">
                <div>
                    <button
                            class="chat__add-btn"
                            title="Прикрепить медиа"
                    >
                    </button>
                </div>
                <textarea
                        class="chat__post-area"
                        name="message"
                        placeholder="Сообщение"
                ></textarea>
                <div>
                    <button
                            class="chat__send-btn"
                            title="Отправить"
                    >
                    </button>
                </div>
            </div>
        </div>
    </div>
`;
