
const express = require('express')

const port = 4600

const app = express()

app.get('/', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express`
    })
    res.end()
})
app.get('/:id', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express ${req.params.id}`
    })
    res.end()
})
app.post('/', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express`
    })
    res.end()
})
app.put('/:id', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express ${req.params.id}`
    })
    res.end()
})
app.delete('/:id', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express ${req.params.id}`
    })
    res.end()
})



app.listen(port, ()=>{
    console.log(`this app is excellent and 100% ready to run`)
})