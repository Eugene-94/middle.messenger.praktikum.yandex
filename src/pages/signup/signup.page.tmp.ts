export default `
    <div class="signup-page">
        <div class="signup">

            <h1 class="signup__header text-center">Регистрация</h1>

            <form class="signup__form">
                <div class="signup__form-control form-control">
                    <label class="label" for="email">Почта</label>
                    <input
                            class="input-text"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Введите"
                            value=""
                    >
                </div>
                <div class="signup__form-control form-control">
                    <label class="label" for="login">Логин</label>
                    <input
                            class="input-text"
                            id="login"
                            type="text"
                            name="login"
                            placeholder="Введите"
                            value=""
                    >
                </div>
                <div class="signup__form-control form-control">
                    <label class="label" for="first_name">Имя</label>
                    <input
                            class="input-text"
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="Введите"
                            value=""
                    >
                </div>
                <div class="signup__form-control form-control">
                    <label class="label" for="second_name">Фамилия</label>
                    <input
                            class="input-text"
                            id="second_name"
                            type="text"
                            name="second_name"
                            placeholder="Введите"
                            value=""
                    >
                </div>
                <div class="signup__form-control form-control">
                    <label class="label" for="phone">Телефон</label>
                    <input
                            class="input-text"
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="Введите"
                            value=""
                    >
                </div>
                <div class="signup__form-control form-control">
                    <label class="label" for="password">Пароль</label>
                    <input
                            class="input-text"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Введите"
                            value=""
                    >
                </div>
                <div class="signup__form-control form-control">
                    <label class="label" for="password_check">Пароль</label>
                    <input
                            class="input-text"
                            id="password_check"
                            type="password"
                            name="password_check"
                            placeholder="Введите"
                            value=""
                    >
                </div>

                <div class="signup__form-action flex flex-center">
                    {{> button label='Зарегистрироваться' type='submit' }}
                </div>

            </form>

            <div class="flex flex-center">
                <a href="#">Вход</a>
            </div>


        </div>
    </div>
`;
