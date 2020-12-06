
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
        type: Date,
        default: moment().calendar() 
    },
    returnDate:{
        type: Date,
        default: moment().add(3, 'days').calendar()
    }
})

module.exports = mongoose.model('Rent', rentSchema)