const Rent = require('./model');
const moment = require('moment')

exports.addMovie = async (req, res) => {
    try {
        const nuevaPelicula = await Rent.create({
            user_id: req.body.user_id,
            pelicula: req.body.pelicula,
            createDate: moment().calendar(),
            returnDate:moment().add(3, 'days').calendar()
        });
       
        res.status(200).json({message: 'Pelicula añadida correctamente', nuevaPelicula: nuevaPelicula});
    } catch (error) {
        res.status(500).send({message: error});
    }
}

exports.getMyMovies= async(req,res)=>{ 
    try{
    const movie = await Rent.find({ user_id: req.body.user_id});
    res.status(200).json(movie)
    } catch (error){
        res.status(500).send({message: 'La pelicula no ha podido crearse correctamente'});
    } 
}