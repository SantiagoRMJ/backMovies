const express = require('express');
const mongoose =require('mongoose')

const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/backmovie'

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3001;


mongoose.connect(MongoURI,{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(()=> console.log('conectado a la base de datos: ' + MongoURI))
.catch( e => console.error('no estoy conectado'));




app.listen(PORT, ()=> console.log("servidor levantado en el puerto " + PORT))


