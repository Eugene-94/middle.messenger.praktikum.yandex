export default `
    <div class="container">
        <div class="profile-page">
            <div class="profile">
                {{{ navBack }}}
                <div class="flex flex-center">
                    {{{ avatar }}}
                </div>

                <h1 class="profile__username text-center">{{ user.first_name }}</h1>
                
                {{{ userInfo }}}

                
                <div class="profile__actions">
                    {{{ settingsLink }}}
                    <div>
                        <a href="#">Изменить пароль</a>
                    </div>
                    <div>
                        <a class="text-alert" href="/logout">Выйти</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
