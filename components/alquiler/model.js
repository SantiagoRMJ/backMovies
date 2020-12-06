const mongoose = require("mongoose");

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
        type: String
    },
    returnDate:{
        type: String
    }
})

module.exports = mongoose.model('Rent', rentSchema)