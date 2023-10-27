export default `
    <link rel="stylesheet" href="login.page.scss">
    <div class="login-page">
        <div class="login">

            <h1 class="login__header text-center">Вход</h1>

            <form class="login__form">
                <div class="login__form-control form-control">
                    <label class="label" for="login">Логин</label>
                    <input
                            class="input-text"
                            id="login"
                            type="text"
                            name="login"
                            placeholder="Введите"
                    >
                </div>
                <div class="login__form-control form-control">
                    <label class="label" for="password">Пароль</label>
                    <input
                            class="input-text"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Введите"
                    >
                </div>

                <div class="signup__form-action flex flex-center">
                    {{> button label='Авторизоваться' type='submit' }}
                </div>

            </form>

            <div class="flex flex-center">
                <a href="#">Нет аккаунта?</a>
            </div>
        </div>
    </div>
`;
