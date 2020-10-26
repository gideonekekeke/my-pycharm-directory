const express = require('express')
const mongoose = require('mongoose')
const port = 9700
const url = "mongodb://localhost/youDB"




const app = express();


mongoose.connect(url, {useNewUrlParser : true})

const con = mongoose.connection

con.on('open', ()=>{
    console.log('connected...')
})

app.use(express.json())
const name =require('./Router/router')
app.use('/', name)


app.listen(port, ()=>{
    console.log('listening on the port')
})