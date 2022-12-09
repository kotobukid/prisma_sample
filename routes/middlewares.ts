import {NextFunction, Request, Response} from "express";

const check_session = (req: Request, res: Response, next: NextFunction) => {
    console.log('checking session');

    next();
}

export {check_session}