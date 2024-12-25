const response = require('express')

fetch('http://localhost:3000/api/student',{
    method : 'POST',
    headers :{
        "Content-Type":"application/json",
        "x-api-key":"12345"
    },
    body :JSON.stringify({
        name : 'Sinta',
        email : 'Sinta@gmail.com',
        phone : '077999988815'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error =>console.log(error))