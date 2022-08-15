
fetch('http://localhost:3000/tutor/dashboard',{
    credentials: 'include'
}).then((response)=>{
    if (response.ok){
        console.log(response.json())
        console.log(response)
    }else {
        window.location.replace('lecturer-login.html')
    }
})
