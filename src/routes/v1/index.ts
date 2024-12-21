import { Router, Request, Response } from "express";
import LanguagesRouter from "./Language";

const router: Router = Router();

router.use('/languages', LanguagesRouter);

router.get("/health", (req: Request, res: Response) => {
    res.send("Ok");
});

export default router;
