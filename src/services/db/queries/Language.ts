import Language from "../models/Language";
import { CreateLanguageMessage } from "../dto/Language/CreateLanguageMessage";
import { ListQuery } from "../../../dto/queries/ListQuery";


export async function getAllLanguages(query: ListQuery): Promise<Language[]>{

    try{
        const allowedSort: string[] = ['name'];
        const language = await Language.findAll({ raw: true, limit: query.limit, offset: query.offset, order: query.getOrder(allowedSort) || undefined});
        return language;
    }
    catch (err){
        throw err;
    }
}

export async function createLanguage(newLanguage: CreateLanguageMessage): Promise<Language> {
    try{
        const language = await Language.create(newLanguage, {raw: true});
        return language;
    }
    catch (err){
        throw err;
    }
}


