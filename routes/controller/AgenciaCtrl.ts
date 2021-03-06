
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class AgenciaCtrl
{
    saveAgencia(req: Request, res: Response, next: NextFunction)
    {                
        let cart = { 
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            imagen: req.body.imagen,            
            telefono: req.body.telefono
        };

        SqlSource.saveAgencia(cart)
            .then((result: number) =>
            {
                let out = { id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getAgencia(req: Request, res: Response, next: NextFunction)
    {
        let agenciaId = req.query.id;        
        SqlSource.getAgencia(agenciaId)
            .then((result: any) =>
            {                
                CtrlUtil.sendObject(res, result);
            });
    }        

    setAgencia(req: Request, res: Response, next: NextFunction)
    {

        let cart = { 
            id: req.body.id,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            imagen: req.body.imagen,            
            telefono: req.body.telefono
        };                
        SqlSource.setAgencia(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });            
    }

    deleteAgencia(req: Request, res: Response, next: NextFunction)
    {
        let agenciaId = req.query.id;           
        SqlSource.deleteAgencia(agenciaId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}