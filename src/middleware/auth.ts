import { NextFunction, Request, Response } from "express";

export const authenticator = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("teste");

    if (token === '123456') next();
    else res.status(401).send({ code: 401, message: 'Unauthorized' })
}