module.exports = (db) => {
    const { DataTypes } = db.Sequelize;
    const User = db.sequelize.define('user', {
        // Model attributes are defined here
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipCode: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
    }, {
        // Other model options go here
    });
    return User;
};
