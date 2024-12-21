import winston, { format } from "winston";
import dotenv from "dotenv";

const { combine, splat, timestamp, printf } = format;

dotenv.config();

const myFormat = printf( ({ level, message, timestamp , ...metadata}) => {
    let msg = `${timestamp} [${level}] : ${message} `  
    if(metadata) {
        msg += JSON.stringify(metadata)
    }
    return msg
});


export const winstonConfig: winston.LoggerOptions = {
    level: process.env.LOG_LEVEL,
    format: combine(
        format.colorize(),
        splat(),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/application.log', level: 'error' })
    ],
};

