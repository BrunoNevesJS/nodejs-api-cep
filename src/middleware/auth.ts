import { NextFunction, Request, Response } from "express";

export const authenticator = (req: Request, res: Response, next: NextFunction) => {
    // TODO: verificar JWT
    next();
}