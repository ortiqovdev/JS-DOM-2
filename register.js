const username = document.querySelector('#reg-username')
const password = document.querySelector('#reg-password')
const name = document.querySelector('#reg-name')
const age = document.querySelector('#reg-age')

const register = document.querySelector('button#register')

window.users = []

register.onclick = () => {
    const user = {
        "username": username.value,
        "password": password.value,
        "name": name.value,
        "age": age.value
    }


    // Save users
    window.users.push(user)
}