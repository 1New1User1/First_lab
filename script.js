function register(event) {
    event.preventDefault();

    const name = document.getElementsByClassName("name").value;
    const ticket = document.getElementsByClassName("ticket").value;
    const result = document.getElementsByClassName("result");

    alert(name + ", вы успешно зарегистрированы! Тип билета: " + ticket + ".");
}