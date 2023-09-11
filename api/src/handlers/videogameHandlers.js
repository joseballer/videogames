// const {
// 	getPokemonByName,
// 	getPokemons,
// 	getPokemonById,
// 	createPokemon,
// } = require('../controllers/pokemonController')

const getVideogameHandler = async (req, res) => {
	//const { name, page } = req.query
	try {
		//const response = name ? await getPokemonByName(name) : await getPokemons(page)
		//return res.status(200).json(response)
        return res.send('estas en la ruta de getVideogames')
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}
const getVideogameByIdHandler = async (req, res) => {
	//const { id } = req.params
	try {
		// const response = await getPokemonById(id)
		// return res.status(200).json(response)
        return res.send('estas en la ruta de getById')
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}
const getVideogameByNameHandler = async (req, res) => {
	//const { id } = req.params
	try {
		// const response = await getPokemonById(id)
		// return res.status(200).json(response)
        return res.send('estas en la ruta de getByName')
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}
const postVideogameHandler = async (req, res) => {
	//const { Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Type } = req.body
	try {
		// const newPokemon = await createPokemon(
		// 	Nombre,
		// 	Imagen,
		// 	Vida,
		// 	Ataque,
		// 	Defensa,
		// 	Velocidad,
		// 	Altura,
		// 	Peso,
		// 	Type
		// )
		return res
			.status(201)
			.send(`el pokemon ha sido creado correctamente con el ID`)
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}

module.exports = { getVideogameHandler, postVideogameHandler , getVideogameByIdHandler, getVideogameByNameHandler }