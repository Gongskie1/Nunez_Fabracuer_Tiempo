const { DataTypes} = require("sequelize");
const {sequelize} = require("../../common/db/db_utils")

const User = sequelize.define("people", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

);

module.exports = User;