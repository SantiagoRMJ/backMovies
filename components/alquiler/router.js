
const router = require('express').Router();
const rentController = require('./controller');


router.post('/', rentController.addMovie);
router.get('/', rentController.getMyMovies);