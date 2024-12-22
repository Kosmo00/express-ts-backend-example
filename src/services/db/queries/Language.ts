import Language from "../models/Language";
import { CreateLanguageMessage } from "../dto/Language/CreateLanguageMessage";
import { ListQuery } from "../../../dto/queries/ListQuery";
import logger from "../../logging/logger";
import { UpdateLanguageMessage } from "../dto/Language/UpdateLanguageMessage";
import { NotFoundException } from "../exceptions/NotFoundException";

export async function getAllLanguages(query: ListQuery): Promise<Language[]>{

    try{
        logger.verbose('Entering in getAllLanguages function with this parametesr: ', { query });
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
        logger.verbose('Entering in createLanguage function with this parameters: ', { newLanguage });
        const language = await Language.create(newLanguage, {raw: true});
        logger.verbose('Returning language', language);
        return language;
    }
    catch (err){
        logger.verbose('createLanguage function throws an exception', err);
        throw err;
    }
}

export async function updateLanguage(id: string, newValues: UpdateLanguageMessage): Promise<Language> {
    try{
        const language = await Language.findByPk(id);
        if(!language){
            logger.verbose(`updateLanguage not found ${id} Language`);
            throw new NotFoundException('The framework does not exist');
        }
        language.update({...newValues});
        language.save();
        logger.verbose('Returning language', language);
        return language!;
    }catch(err){
        logger.verbose('updateLanguage function throws an exception', err);
        throw err;
    }
}

export async function readLanguage(id: string): Promise<Language> {
    try{
        const language = await Language.findByPk(id);
        if(!language){
            logger.verbose(`updateLanguage not found ${id} Language`);
            throw new NotFoundException('The framework does not exist');
        }
        logger.verbose('Returning language', language);
        return language!;
    }catch(err){
        logger.verbose('updateLanguage function throws an exception', err);
        throw err;
    }
}

export async function deleteLanguage(id: string) {
    try{
        logger.verbose('Entering in createLanguage function with this parameter: ', { id });
        await Language.destroy({where: {id}});
    }catch(err){
        logger.verbose('deleteLanguage function throws an exception', err);
        throw err;
    }
}
