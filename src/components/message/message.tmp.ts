export default `
    <div class="message{{#if outgoing}} message_outgoing{{/if}}">
        <div class="message__inner">
            <p class="message__text">{{ text }}</p>
        </div>
    </div>
`;
