const { getAllGenres } = require('../controllers/genreControllers')

const getGenresHandler = async (req, res) => {
	const { genre } = req.query
	try {
		const response =  await getAllGenres(genre)
		return res.status(201).json(response)
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}

module.exports = {
	getGenresHandler,
}