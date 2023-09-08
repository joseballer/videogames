
const { DataTypes} = require('sequelize')
module.exports = (sequelize) => {
	sequelize.define(
		'Videogame',
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			Nombre: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			Descripcion: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Plataformas: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Imagen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Fecha_de_lanzamiento: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Rating: {
				type: DataTypes.INTEGER,
        allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	)
}