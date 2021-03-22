module.exports = (db) => {
    const { DataTypes } = db.Sequelize;
    const Movie = db.sequelize.define('movie', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        synopsis: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        year: {
            type: DataTypes.INTEGER
        },
        director: {
            type: DataTypes.STRING
        }
    }, {
        // Other model options go here
    });
    return Movie;
};
