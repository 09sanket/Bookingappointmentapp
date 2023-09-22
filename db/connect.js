const mysql = require("mysql2");

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_databases", "root", "YES", {
	host: "localhost",
	dialect: "mysql",
});

const checkConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("connected to db...");
	} catch (error) {
		console.log("unable to connect to db...", error);
	}
};
// checkConnection()

module.exports = {sequelize};
