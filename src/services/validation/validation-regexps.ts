const validationRegExps = {
    email: new RegExp(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
    login: new RegExp(/^[a-zA-Z][a-zA-Z0-9_-]{3,20}$/),
    password: new RegExp(/^(?=.*\d)(?=.*[A-ZА-Я])(?!.*[^a-zа-яA-ZА-Я0-9@#$^+=])(.{8,40})$/u),
    name: new RegExp(/^[A-ZА-ЯЁ][a-za-яё-]+$/ug),
    phone: new RegExp(/^[+]?\d+/)
};

export default validationRegExps;
