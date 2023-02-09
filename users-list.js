const usersList = document.querySelector('section#users')


function showUsers() {
    usersList.innerHTML = ' '

    for(let user of window.users){
        const li = document.createElement('li')
        li.textContent = ` ${user.username} ${user.password}  ${user.name} ${user.age}`
        usersList.appendChild(li)
    }
}

window.showUsers = showUsers