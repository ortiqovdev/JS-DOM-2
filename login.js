const username = document.querySelector('#username')
const password = document.querySelector('#password')

const login = document.querySelector('button#login')

login.onclick = () => {
    let user_name = username.value
    let pass_word = password.value

    let user = window.users.find(u => u.password == pass_word && u.username == user_name)

    if (user == undefined) {
        alert("Bunday foydalanuvchi topilmadi❌. Iltimos avval ro'yhatdan o'ting❗ ")
    } else {
        alert("Muvaffaqiyatli✅😉")
    }
} 