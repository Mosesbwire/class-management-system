const form = document.getElementById('lec-login')
const inputArray = Array.from(form.getElementsByTagName('input'))
const errors = document.getElementById('login-errors')
const data = {}



form.addEventListener('submit', async (event)=>{
    
    event.preventDefault()

    inputArray.forEach(e=>{
        if(e.name !== 'confirm-password'){
            data[e.name] = e.value
        }
    })
    
    const response = await fetch('http://localhost:3000/tutor/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }

    })
    
    const responseObj = await response.json()
    if(!response.ok){
       let p = document.createElement('p')
       p.textContent = responseObj.message 
       errors.append(p)
    }

    if (response.ok){
    
        window.location.href = 'lecturer-dashboard.html'
    }

})