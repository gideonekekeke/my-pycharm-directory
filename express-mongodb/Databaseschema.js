const mongoose = require('mongoose');





const labschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    
    },

    age: {
       type: Number,
       required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    subscribe :{
        type : Boolean,
        required: true
    }
})


module.exports = mongoose.model('youtube', labschema)