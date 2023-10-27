export default `
    <div class="change-password-page">
        <div class="change-password">
            <div class="flex flex-center">
                {{> avatar }}
            </div>

            <form class="change-password__form">
                <div class="fieldset">
                    <div class="form-control">
                        <label for="oldPassword" class="label">Старый пароль</label>
                        <input
                                class="input-text"
                                id="oldPassword"
                                type="password"
                                name="oldPassword"
                                placeholder="Введите"
                        >
                    </div>
                </div>

                <hr>

                <div class="fieldset grid-2-col">
                    <div class="form-control">
                        <label for="newPassword" class="label">Новый пароль</label>
                        <input
                                class="input-text"
                                id="newPassword"
                                type="password"
                                name="newPassword"
                                placeholder="Введите"
                        >
                    </div>

                    <div class="form-control">
                        <label for="newPasswordRepeat" class="label">Повторите новый пароль</label>
                        <input
                                class="input-text"
                                id="newPasswordRepeat"
                                type="password"
                                name="newPasswordRepeat"
                                placeholder="Введите"
                        >
                    </div>
                </div>

                <div class="flex flex-center change-password__form-actions">
                    {{> button label='Сохранить' type='submit' }}
                </div>
            </form>
        </div>
    </div>
`;
