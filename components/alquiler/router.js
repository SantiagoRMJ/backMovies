
const router = require('express').Router();
const rentController = require('./controller');

router.post('/', rentController.addMovie);
router.post('/mymovies', rentController.getMyMovies);

module.exports = router;