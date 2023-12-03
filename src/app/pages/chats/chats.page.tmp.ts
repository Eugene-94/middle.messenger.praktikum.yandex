export default `
        
        <div class="contacts">
            <div class="contacts__actions">
                <button class="button button_s add" title="Создать чат">+</button>
                {{{ profileLink }}}
            </div>
            
            
            <div class="contacts__search">
                <input type="text" class="input-text contacts__search-field" placeholder="Поиск">
            </div>
            
            {{{ chatsList }}}

        </div>
        {{{ chatSection }}}
`;
