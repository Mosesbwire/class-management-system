
const logoutBtn = document.getElementById('logout')

logoutBtn.addEventListener('click',async ()=>{


    const response = await fetch('http://localhost:3000/tutor/logout',{
        method: 'POST'
    })

    if(response.ok){
        sessionStorage.removeItem('user')
        window.location.href = 'lecturer-login.html'
    }

    console.log(response)
})