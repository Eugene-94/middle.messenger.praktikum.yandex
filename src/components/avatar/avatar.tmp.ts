export default `
    {{#if clickable}}
        <button class="avatar__btn" type="button"></button>
    {{else}}
        {{#if src }}
            <img src="{{ src }}" alt="Аватар">
        {{else}}
            <div class="avatar__fallback"></div>
        {{/if}}
    {{/if}}
`;
