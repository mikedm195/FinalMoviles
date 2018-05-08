
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class FechaCtrl
{
    saveFecha(req: Request, res: Response, next: NextFunction)
    {                
        let cart = { 
            partida: req.body.partida,
            regreso: req.body.regreso,
            transporte: req.body.transporte,            
            duracion: req.body.duracion
        };

        SqlSource.saveFecha(cart)
            .then((result: number) =>
            {
                let out = { id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getFecha(req: Request, res: Response, next: NextFunction)
    {
        let fechaId = req.query.id;        
        SqlSource.getFecha(fechaId)
            .then((result: any) =>
            {                
                CtrlUtil.sendObject(res, result);
            });
    }        

    setFecha(req: Request, res: Response, next: NextFunction)
    {

        let cart = { 
            id: req.body.id,
            partida: req.body.partida,
            regreso: req.body.regreso,
            transporte: req.body.transporte,            
            duracion: req.body.duracion
        };                
        SqlSource.setFecha(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });            
    }

    deleteFecha(req: Request, res: Response, next: NextFunction)
    {
        let fechaId = req.query.id;           
        SqlSource.deleteFecha(fechaId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}