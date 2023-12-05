export default `
    <div class="avatar-container">

        {{#if clickable}}
            <button class="avatar__btn" type="button">
                {{#if src }}
                    <img src="{{ src }}" alt="Аватар">
                {{else}}
                    <div class="avatar__fallback"></div>
                {{/if}}
            </button>
        {{else}}
            {{#if src }}
                <img src="{{ src }}" alt="Аватар">
            {{else}}
                <div class="avatar__fallback"></div>
            {{/if}}
        {{/if}}
    </div>
`;
