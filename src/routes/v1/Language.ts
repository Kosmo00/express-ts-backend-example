import { Router } from "express";
import { addLanguage, listLanguages } from "../../controllers/Language";

const LanguagesRouter: Router = Router();

LanguagesRouter.get('/', listLanguages);
LanguagesRouter.post('/', addLanguage);

export default LanguagesRouter;