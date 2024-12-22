import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config();
const DB_DATABASE = process.env.DB_DATABASE!;
const DB_USERNAME = process.env.DB_USERNAME!;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DIALECT : Dialect = process.env.DB_DIALECT as Dialect;

let sequelizeConnection = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DIALECT
});

export default sequelizeConnection;
