
const form = document.getElementById('sign-up-tutor')
const inputArray = Array.from(form.getElementsByTagName('input'))
const data = {}


form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    inputArray.forEach(e=>{
        if(e.name !== 'confirm-password'){
            data[e.name] = e.value
        }
    })
    const response = await fetch('http://localhost:3000/tutor/sign-up', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })

    if (response.ok){
        const tutor = await response.json()
        sessionStorage.setItem('user', JSON.stringify(tutor))
        window.location.href = 'lecturer-dashboard.html'

    }

    

})







