import winston from "winston";
import { winstonConfig } from "../../config/winston.config";
import dotenv from "dotenv";
import { Environment } from "../../constrains/environment";

dotenv.config();

const logger = winston.createLogger(winstonConfig);

if(process.env.ENVIRONMENT !== Environment.PRODUCTION){
    logger.add(new winston.transports.Console({level: process.env.LOG_LEVEL}));
}

export default logger;
