
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class ViajeCtrl
{
    saveViaje(req: Request, res: Response, next: NextFunction)
    {                
        let cart = { 
            destino: req.body.destino,
            descripcion: req.body.descripcion,
            fotografia: req.body.fotografia,            
            precio: req.body.precio
        };

        SqlSource.saveViaje(cart)
            .then((result: number) =>
            {
                let out = { id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getViaje(req: Request, res: Response, next: NextFunction)
    {
        let viajeId = req.query.id;        
        SqlSource.getViaje(viajeId)
            .then((result: any) =>
            {                
                CtrlUtil.sendObject(res, result);
            });
    }        

    setViaje(req: Request, res: Response, next: NextFunction)
    {

        let cart = { 
            id: req.body.id,
            destino: req.body.destino,
            descripcion: req.body.descripcion,
            fotografia: req.body.fotografia,            
            precio: req.body.precio
        };        
        console.log(JSON.stringify(cart))        
        SqlSource.setViaje(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });            
    }

    deleteViaje(req: Request, res: Response, next: NextFunction)
    {
        let viajeId = req.query.id;           
        SqlSource.deleteViaje(viajeId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}