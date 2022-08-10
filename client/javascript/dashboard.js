const user = JSON.parse(sessionStorage.getItem('user'))

console.log(user)
function setUserName(){
    const name = document.querySelector('.name')
    name.textContent = `${user.first_name} ${user.last_name}`
}


setUserName()