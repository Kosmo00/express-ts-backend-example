import { Request, Response } from "express";
import { createLanguage, deleteLanguage, getAllLanguages, readLanguage, updateLanguage } from "../services/db/queries/Language";
import { InternalServerErrorMessage } from "../dto/errors/InternalServerErrorMessage";
import { plainToInstance } from "class-transformer";
import { LanguageToSend } from "../services/db/dto/Language/LanguageToSend";
import { CreateLanguageMessage } from "../services/db/dto/Language/CreateLanguageMessage";
import { ListQuery } from "../dto/queries/ListQuery";
import logger from "../services/logging/logger";
import { validateOrReject, ValidationError } from "class-validator";
import { UnprocessableContentErrorMessage } from "../dto/errors/UnprocessableContentErrorMessage";
import { UpdateLanguageMessage } from "../services/db/dto/Language/UpdateLanguageMessage";
import { NotFoundException } from "../services/db/exceptions/NotFoundException";
import { NotFoundErrorMessage } from "../dto/errors/NotFoundErrorMessage";

export const listLanguages = async (req: Request, res: Response): Promise<void> => {
    try {
        // receive user data
        logger.info("Entering in listLanguages controller with params", {params: req.params, query: req.query});
        const query = plainToInstance(ListQuery, req.query, {excludeExtraneousValues: true, enableImplicitConversion: true});
        // validate user's data if necesary
        
        // handle user request
        const languages = await getAllLanguages(query);
        logger.verbose("List of languages obtained in listLanguages controller", languages);
        const languagesToSend = plainToInstance(LanguageToSend, languages, { excludeExtraneousValues: true });
        // send a response
        logger.verbose("Sending response in listLanguages controller", languagesToSend);
        res.status(200).json(languagesToSend);
    } catch(err) {
        logger.error('Internal error in listLanguages Controller.', err);
        // check error type (optional) and return a message
        res.status(500).json(new InternalServerErrorMessage());
    }
}

export const addLanguage = async (req: Request, res: Response): Promise<void> => {
    try {
        // receive user data
        logger.info("Entering in controller addLanguage controller with params ", {body: req.body, params: req.params, query: req.query});
        const newLanguage = plainToInstance(CreateLanguageMessage, req.body, {excludeExtraneousValues: true});
        // validate user's data if necesary
        try{
            await validateOrReject(newLanguage)
        } catch(err){
            const errors  = err as ValidationError[];
            logger.info("Some fields failed validations", errors);
            res.status(422).send(new UnprocessableContentErrorMessage(errors));
            return;
        }
        // handle user request
        const language = await createLanguage(newLanguage);
        logger.verbose("Language created in addLanguage controller", language);
        const languageToSend = plainToInstance(LanguageToSend, language.dataValues, {excludeExtraneousValues: true});
        // send a response
        logger.verbose("Sending response in addLanguage controller", languageToSend);
        res.status(201).json(languageToSend);
    } catch(err) {
        logger.error('Internal error in addLanguage controller.', err);
        // check error type (optional) and return a message
        res.status(500).json(new InternalServerErrorMessage());
    }
}

export const editLanguage =  async (req: Request, res: Response): Promise<void> => {
    try {
        // receive user data
        logger.info("Entering in controller editLanguage controller with params ", {body: req.body, params: req.params, query: req.query});
        const id = req.params.id;
        const newLanguage = plainToInstance(UpdateLanguageMessage, req.body, {excludeExtraneousValues: true});
        // validate user's data if necesary
        try{
            await validateOrReject(newLanguage)
        } catch(err){
            const errors  = err as ValidationError[];
            logger.info("Some fields failed validations", errors);
            res.status(422).send(new UnprocessableContentErrorMessage(errors));
            return;
        }
        // handle user request
        const language = await updateLanguage(id, newLanguage);
        logger.verbose("Language updated in editLanguage controller", language);
        const languageToSend = plainToInstance(LanguageToSend, language.dataValues, {excludeExtraneousValues: true});
        // send a response
        logger.verbose("Sending response in editLanguage controller", languageToSend);
        res.status(200).json(languageToSend);
    } catch(err) {
        // check error type (optional) and return a message
        if(err instanceof NotFoundException){
            logger.info('Not Found error in editLanguage controller.', err);
            res.status(404).json(new NotFoundErrorMessage());
            return;
        }
        logger.error('Internal error in editLanguage controller.', err);
        res.status(500).json(new InternalServerErrorMessage());
    }
}

export const removeLanguage = async (req: Request, res: Response) : Promise<void> => {
    try {
        // receive user data
        logger.info("Entering in removeLanguage controller with params", {params: req.params, query: req.query});
        const id = req.params.id;
        // validate user's data if necesary
        
        // handle user request
        await deleteLanguage(id);
        logger.verbose("Language deleted in removeLanguage Controller");
        // send a response
        logger.verbose("Sending no content in removeLanguage controller");
        res.status(204).send();
    } catch(err) {
        logger.error('Internal error in removeLanguage Controller.', err);
        // check error type (optional) and return a message
        res.status(500).json(new InternalServerErrorMessage());
    }
}

export const getLanguage = async (req: Request, res: Response) : Promise<void> => {
    try {
        // receive user data
        logger.info("Entering in controller getLanguage controller with params ", {body: req.body, params: req.params, query: req.query});
        const id = req.params.id;
        // validate user's data if necesary
        
        // handle user request
        const language = await readLanguage(id);
        logger.verbose("Language obtained in getLanguage controller", language);
        const languageToSend = plainToInstance(LanguageToSend, language.dataValues, {excludeExtraneousValues: true});
        // send a response
        logger.verbose("Sending response in getLanguage controller", languageToSend);
        res.status(200).json(languageToSend);
    } catch(err) {
        // check error type (optional) and return a message
        if(err instanceof NotFoundException){
            logger.info('Not Found error in getLanguage controller.', err);
            res.status(404).json(new NotFoundErrorMessage());
            return;
        }
        logger.error('Internal error in getLanguage controller.', err);
        res.status(500).json(new InternalServerErrorMessage());
    }
}


