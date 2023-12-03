export default `
    {{#if activeChat}}
        {{{ chatHeader }}}

        <div class="chat__feed">
            {{{ chatFeed }}}
        </div>
    {{else}}
        <div class="chat__empty">Выберите чат или создайте новый</div>

    {{/if}}

`;
