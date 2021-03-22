const Sequelize = require('sequelize');
const UserModel = require('./user');
const MovieModel = require('./movie');

const db = {
    Sequelize,
    init(config) {
        db.sequelize = new Sequelize(`mysql://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);
        return db.sequelize.authenticate()
            .then(() => {
                db.User = UserModel(db);
                db.Movie = MovieModel(db);

                db.User.belongsToMany(db.Movie, {through: 'userMovies'});
                db.Movie.belongsToMany(db.User, {through: 'userMovies'});

                return db.sequelize.sync({ force: false });
            })

    },
};

module.exports = db;