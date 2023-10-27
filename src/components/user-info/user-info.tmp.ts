export default `
    <div>

        <div>
            <div class="fieldset grid-2-col">
                <div class="form-control">
                    <label for="first_name" class="label">Имя</label>
                    <input
                            class="input-text"
                            id="first_name"
                            type="text"
                            name="first_name"
                            value="{{ first_name }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
                <div class="form-control">
                    <label for="second_name" class="label">Фамилия</label>
                    <input
                            class="input-text"
                            id="second_name"
                            type="text" 
                            name="second_name"
                            value="{{ second_name }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
            </div>

            <hr>

            <div class="fieldset grid-2-col">
                <div class="form-control">
                    <label for="email" class="label">Почта</label>
                    <input
                            class="input-text"
                            id="email"
                            type="text"
                            name="email"
                            value="{{ email }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
                <div class="form-control">
                    <label for="login" class="label">Логин</label>
                    <input
                            class="input-text"
                            id="login"
                            type="text" 
                            name="login"
                            value="{{ login }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
            </div>

            <hr>

            <div class="fieldset grid-2-col">
                <div class="form-control">
                    <label for="display_name" class="label">Имя в чате</label>
                    <input
                            class="input-text"
                            id="display_name"
                            type="text"
                            name="display_name"
                            value="{{ display_name }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>

                <div class="form-control">
                    <label for="phone" class="label">Телефон</label>
                    <input
                            class="input-text"
                            id="phone"
                            type="text"
                            name="phone"
                            value="{{ phone }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
            </div>

        </div>
    </div>
`;
