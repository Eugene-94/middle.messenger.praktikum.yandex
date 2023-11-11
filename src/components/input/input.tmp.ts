export default `

    {{#if label}}
        <label class="label">{{ label }}</label>
    {{/if}}
    <input
        class="input-text"
        type='{{ type }}'
        value='{{ value }}'
        name="{{ name }}"
        placeholder="{{ placeholder }}"
        {{#if readonly}}disabled{{/if}}
    >
    {{#if errors}}
        <div class="validation-error">Некорректное значение</div>
    {{/if}}
`;
