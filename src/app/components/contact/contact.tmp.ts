export default `
    <div class="contact {{#if active}}active{{/if}}">
        <figure class="contact__photo">

        </figure>


        <div class="contact__base">
            <h3 class="contact__name">{{ title }}</h3>
            {{#if last_message}}<p class="contact__date">{{ last_message.time }}</p>{{/if}}
            {{#if last_message}}<p class="contact__message">{{ last_message.content }}</p>{{/if}}
            {{#if unread_count}}<p class="contact__counter">{{unread_count}}</p>{{/if}}
        </div>
    </div>
    
    <hr>
`;
