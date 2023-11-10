import { Sequelize } from "sequelize";

const database = process.env.database || "taskphin";
const username = process.env.database || "postgres";
const password = process.env.database || "postgres";
const hostname = process.env.hostname || "postgres";

export const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: "postgres",
});
