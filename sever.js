// Express is a dependency that allows easy use of NodeJs
const express = require('express')

// specifying a port for connection
const port = 4600

// extantiation from express library thereby creating an instance of express().
const app = express()

// get request reads data
app.get('/', (req, res) => {
    // By using express, it solves the stress of manually specifying your StatusCode.
    req.status(200).json({
        report:true,
        msg:`i love this express`
    })
    res.end()
})
app.get('/:id', (req, res) => {
    req.status(200).json({
        report:true,
        msg:`i love this express ${req.params.id}`
    })
    res.end()
})

// post request inserts data
app.post('/', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express`
    })
    res.end()
})

// updata request edits data
app.put('/:id', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express ${req.params.id}`
    })
    res.end()
})

//delete request removes data
app.delete('/:id', (req,res)=>{
    req.status(200).json({
        report:true,
        msg:`i love this express ${req.params.id}`
    })
    res.end()
})


// creating a listening port
app.listen(port, ()=>{
    console.log(`Express app is now listening to port ${port} .......`)
})