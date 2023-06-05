const loginFormEl = document.querySelector('.login-form');
const emailInputEl = loginFormEl.elements.email;
const passwordInputEl = loginFormEl.elements.password;

loginFormEl.addEventListener("submit", onClick);

function onClick(e) {
    e.preventDefault();

    const {
        elements: { email, password } 
    } = e.currentTarget;

    if (email.value === "" || password.value === "")  {
       return alert(`Всі поля мають бути заповнені!`);
    } 

    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
    e.currentTarget.reset();
}
