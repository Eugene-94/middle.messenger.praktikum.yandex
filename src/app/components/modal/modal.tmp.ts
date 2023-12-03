export default `
    <div class="overlay">
        <div class="modal">
            <header>
                <h2>{{ title }}</h2>
                <button class="modal__close">X</button>
            </header>
            <div class="modal__content">
                {{{ component }}}
            </div>
        </div>
    </div>
`;
