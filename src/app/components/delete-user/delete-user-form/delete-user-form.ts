export default `
    <div class="form-control">
        <select class="delete-select" name="users">
            {{#each chatUsers.users }}
                <option value="{{ this.id }}">{{ this.login }}</option>
            {{/each}}
        </select>
    </div>

    <button class="button button_alert" type="submit">Удалить</button>

`;
