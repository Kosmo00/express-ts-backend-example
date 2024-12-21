import express, { Express } from "express";
import morgan from "morgan";
import router from "./routes/index";
import dotenv from "dotenv";
import { Environment } from "./constrains/environment";
import swaggerUI from "swagger-ui-express";
import swaggerJson from './config/swagger.json'
import bodyParser = require("body-parser");
import logger from "./services/logging/logger";
import "reflect-metadata";


dotenv.config();

const app : Express = express();
const port = process.env.PORT || 3000;


// Global middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Router
app.use('/api', router);

// Swagger
if(process.env.ENVIRONMENT === Environment.DEVELOPMENT){
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson, { explorer: true }));
}

app.listen(port, () => {
    logger.info(`Server is running at port ${port}`, {status: "Ok"});
});
