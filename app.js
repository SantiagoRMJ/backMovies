const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors')
//const User = require('./components/usuario/model.js');
const routerUser = require('./components/usuario/router');
const routerRent = require('./components/alquiler/router');

const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/backmovie'

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('proyecto backend movies react');
});
app.use('/user', routerUser);
app.use('/rent', routerRent);


mongoose.connect(MongoURI,{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(()=> console.log('conectado a la base de datos: ' + MongoURI))
.catch( e => console.error('no estoy conectado'));


app.listen(PORT, ()=> console.log("servidor levantado en el puerto " + PORT))


