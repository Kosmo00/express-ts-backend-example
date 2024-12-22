import { Router } from "express";
import { addLanguage, editLanguage, getLanguage, listLanguages, removeLanguage } from "../../controllers/Language";

const LanguagesRouter: Router = Router();

LanguagesRouter.get('/', listLanguages);
LanguagesRouter.post('/', addLanguage);
LanguagesRouter.get('/:id', getLanguage);
LanguagesRouter.put('/:id', editLanguage);
LanguagesRouter.delete('/:id', removeLanguage);

export default LanguagesRouter;