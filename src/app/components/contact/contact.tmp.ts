export default `
    <div class="contact {{#if active}}active{{/if}}">
        {{#if avatar}}
            <figure class="contact__photo contact__photo_fallback">
                <img src="{{ avatar }}">
            </figure>
        {{else}}
            <figure class="contact__photo contact__photo_fallback">

            </figure>
        {{/if}}


        <div class="contact__base">
            <h3 class="contact__name">{{ title }}</h3>
            {{#if last_message}}<p class="contact__date">{{ last_message.time }}</p>{{/if}}
            {{#if last_message}}<p class="contact__message">{{ last_message.content }}</p>{{/if}}
            {{#if unread_count}}<p class="contact__counter">{{unread_count}}</p>{{/if}}
        </div>
    </div>
    
    <hr>
`;
