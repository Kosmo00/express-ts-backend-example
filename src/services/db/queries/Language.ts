import Language from "../models/Language";
import { CreateLanguageMessage } from "../dto/Language/CreateLanguageMessage";
import { ListQuery } from "../../../dto/queries/ListQuery";
import logger from "../../logging/logger";

export async function getAllLanguages(query: ListQuery): Promise<Language[]>{

    try{
        logger.verbose('Entering in getAllLanguages function with this parameter: ', query);
        const allowedSort: string[] = ['name'];
        const languages = await Language.findAll({ raw: true, limit: query.limit, offset: query.offset, order: query.getOrder(allowedSort) || undefined});
        logger.verbose('Returning languages', languages);
        return languages;
    }
    catch (err){
        logger.verbose('getAllLanguages function throws an exception', err);
        throw err;
    }
}

export async function createLanguage(newLanguage: CreateLanguageMessage): Promise<Language> {
    try{
        logger.verbose('Entering in createLanguage function with this parameter: ', newLanguage);
        const language = await Language.create(newLanguage, {raw: true});
        logger.verbose('Returning language', language);
        return language;
    }
    catch (err){
        logger.verbose('createLanguage function throws an exception', err);
        throw err;
    }
}


