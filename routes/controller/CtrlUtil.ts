import { Response } from "express";


export class CtrlUtil
{
    public static sendOk(res: Response)
    {
        res.send();
    }

    public static sendObject(res: Response, result)
    {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result ? result : {}));
    }
    
}