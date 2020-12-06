
const mongoose = require("mongoose");
const moment = require('moment')

const rentSchema = new mongoose.Schema({    
    user_id:{
        type: mongoose.Types.ObjectId, ref: 'User',
        required: true
    },
    pelicula:{
        type: String,
        required: true,
    },   
    createDate:{
        type: Date
    },
    returnDate:{
        type: Date
    }
})

module.exports = mongoose.model('Rent', rentSchema)