const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app=express()

app.listen(3000, () =>{
    console.log('Mi servidor empezo')
    console.log(process.env.PUERTO)
})

