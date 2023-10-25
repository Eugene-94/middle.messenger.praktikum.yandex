export default `
    <div class="avatar{{#if clickable}} avatar_clickable{{/if}}">
        {{#if clickable}}
            <button class="avatar__btn" type="button"></button>
        {{else}}
            <div class="avatar__fallback"></div>
        {{/if}}
    </div>
`;