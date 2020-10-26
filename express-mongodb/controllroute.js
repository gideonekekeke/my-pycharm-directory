const express = require('express');
const mongoose = require('mongoose')

const youtube =require('../schemadata/Databaseschema')



exports.getnews = (async(req, res)=>{
   try {
       const tubes = await youtube.find()
       res.status(200).json(tubes)

   }catch(err){
       res.status(404).send('Error' + err)  
   }

})

exports.getnew = (async(req, res)=>{
   try {
       const tubes = await youtube.findById(req.params.id)
       res.status(200).json(tubes)

   }catch(err){
       res.status(404).send('Error' + err)  
   }
    

})

exports.postnew = (async(req, res)=>{
    const data = new youtube({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        subscribe : req.body.subscribe
    
    })
    try {
        const tube = await data.save()
        res.status(200).json(tube)
 
    }catch(err){
        res.status(404).send('Error' + err)  
    }
     
 
 })


 exports.patchnew = (async(req, res)=>{
    try {
        const tubes = await youtube.findOneAndUpdate(req.params.id, req.body)
        res.status(200).json(tubes)
 
    }catch(err){
        res.status(404).send('Error' + err)  
    }
 
 })
 
 exports.deletenew = (async(req, res)=>{
    try {
        const tubes = await youtube.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json(tubes)
 
    }catch(err){
        res.status(404).send('Error' + err)  
    }
 
 })
 







