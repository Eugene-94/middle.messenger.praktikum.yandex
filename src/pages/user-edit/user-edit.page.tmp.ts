export default `
    <div class="user-edit-page">
        <div class="profile">
            <div class="flex flex-center">
                {{> avatar }}
            </div>

            <form class="user-edit-page__form">
                {{> userInfo userInfo }}

                <div class="flex flex-center user-edit-page__form-actions">
                    {{> button label='Сохранить' type='submit' }}
                </div>
            </form>

        </div>
    </div>
`;
