import Sequelize from "sequelize";

const connection = new Sequelize({
  dialect: "sqlite",
  storage: "src/database/dev.db",
});

export default connection;
