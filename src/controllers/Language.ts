import { Request, Response } from "express";
import { createLanguage, getAllLanguages } from "../services/db/queries/Language";
import { InternalServerErrorMessage } from "../dto/errors/InternalServerErrorMessage";
import { plainToInstance } from "class-transformer";
import { LanguageToSend } from "../services/db/dto/Language/LanguageToSend";
import { CreateLanguageMessage } from "../services/db/dto/Language/CreateLanguageMessage";
import { ListQuery } from "../dto/queries/ListQuery";

export const listLanguages = async (req: Request, res: Response): Promise<void> => {
    try{
        // validate user's data if necesary
        const query = plainToInstance(ListQuery, req.query, {excludeExtraneousValues: true, enableImplicitConversion: true});
        console.log(query);
        // handle user request
        const languages = await getAllLanguages(query);
        const languagesToSend = plainToInstance(LanguageToSend, languages, { excludeExtraneousValues: true });
        // send a response
        res.status(200).json(languagesToSend);
    }catch(err){
        console.log(err);
        // check error type (optional) and return a message
        res.status(500).json(new InternalServerErrorMessage());
    }
}

export const addLanguage = async (req: Request, res: Response): Promise<void> => {
    try{
        // receive user data
        const newLanguage = plainToInstance(CreateLanguageMessage, req.body, {excludeExtraneousValues: true});
        // validate user's data if necesary
        
        // handle user request
        const language = await createLanguage(newLanguage);
        const languageToSend = plainToInstance(LanguageToSend, language.dataValues, {excludeExtraneousValues: true});
        
        // send a response
        res.status(201).json(languageToSend);
    }catch(err){
        console.log(err);
        // check error type (optional) and return a message
        res.status(500).json(new InternalServerErrorMessage());
    }
}


