console.log('running')
fetch('http://localhost:3000/tutor/dashboard',{
    credentials: 'include'
}).then((response)=> console.log(response))
