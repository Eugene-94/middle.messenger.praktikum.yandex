export default `
        <div class="contacts">
            <div class="contacts__search">
                <input type="text" class="input-text contacts__search-field" placeholder="Поиск">
            </div>

            {{{ contacts }}}
        </div>
        <div class="chat">
            <div class="chat__title-block">
                <figure class="chat__photo"></figure>
                <h3 class="chat__contact">Иван</h3>
            </div>
            <div class="chat__feed">
                {{{ messages }}}
            </div>
            {{{ form }}}
        </div>
`;
