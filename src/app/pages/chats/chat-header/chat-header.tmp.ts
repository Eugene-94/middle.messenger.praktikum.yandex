export default `
    <div class="chat__title-block">
        <figure class="chat__photo"></figure>
        <h3 class="chat__contact">{{ activeChat.title }}</h3>

        <button class="button button_s add-user">Добавить пользователя</button>
        <button class="button button_s del-user">Удалить пользователя</button>
        <button class="button button_s button_alert delete-chat" title="Удалить чат"></button>
    </div>
`;
