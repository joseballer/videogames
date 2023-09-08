const {Router} = require('express');
const genreRouter = Router();

const {handler} = require('../handlers/genreHandlers')

genreRouter.get('/', handler);

module.exports = genreRouter;