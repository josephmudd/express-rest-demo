const Sequelize = require('sequelize');
const UserModel = require('./user');
const db = {
    Sequelize,
    init(config) {
        db.sequelize = new Sequelize(`mysql://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);
        return db.sequelize.authenticate()
            .then(() => {
                db.User = UserModel(db);
                return db.sequelize.sync({ force: false });
            })

    },
};

module.exports = db;