
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class PlatilloCtrl
{
    savePlatillo(req: Request, res: Response, next: NextFunction)
    {                
        let cart = { 
            fecha: req.body.fecha,
            cliente: req.body.cliente
        };

        SqlSource.savePlatillo(cart)
            .then((result: number) =>
            {
                let out = { id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getPlatillo(req: Request, res: Response, next: NextFunction)
    {
        let platilloId = req.query.id;        
        SqlSource.getPlatillo(platilloId)
            .then((result: any) =>
            {                
                CtrlUtil.sendObject(res, result);
            });
    }        

    setPlatillo(req: Request, res: Response, next: NextFunction)
    {

        let cart = { 
            id: req.body.id,
            fecha: req.body.fecha,
            cliente: req.body.cliente
        };                
        SqlSource.setPlatillo(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });            
    }

    deletePlatillo(req: Request, res: Response, next: NextFunction)
    {
        let platilloId = req.query.id;           
        SqlSource.deletePlatillo(platilloId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}