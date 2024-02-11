const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql"
    }
    
    )

const check = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }
}

sequelize
    .sync()
    .then((result) => {
        // console.log(result)
    }).catch(err =>{
        console.error("Sequelize Initialisation threw an error:", err)
    })

module.exports = {sequelize, check}