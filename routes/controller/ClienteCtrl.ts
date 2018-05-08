
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class ClienteCtrl
{

    isClienteAuth(req: Request, res: Response, next: NextFunction)
    {
        let email = req.query.email;
        let password = req.query.password;        
        SqlSource.isClienteAuth(email, password)
            .then((result: number) =>
            {                
                
                CtrlUtil.sendObject(res, {id:result});
            });
    }

    saveCliente(req: Request, res: Response, next: NextFunction)
    {                
        let cart = { 
            nombre: req.body.nombre,
            apellido_paterno: req.body.apellido_paterno,
            apellido_materno: req.body.apellido_materno,            
            fotografia: req.body.fotografia,
            contacto: req.body.contacto
        };

        SqlSource.saveCliente(cart)
            .then((result: number) =>
            {
                let out = { id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getCliente(req: Request, res: Response, next: NextFunction)
    {
        let clienteId = req.query.id;        
        SqlSource.getCliente(clienteId)
            .then((result: any) =>
            {                
                CtrlUtil.sendObject(res, result);
            });
    }        

    setCliente(req: Request, res: Response, next: NextFunction)
    {

        let cart = { 
            id: req.body.id,
            nombre: req.body.nombre,
            apellido_paterno: req.body.apellido_paterno,
            apellido_materno: req.body.apellido_materno,            
            fotografia: req.body.fotografia,
            contacto: req.body.contacto
        };        
        console.log(JSON.stringify(cart))        
        SqlSource.setCliente(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });            
    }

    deleteCliente(req: Request, res: Response, next: NextFunction)
    {
        let clienteId = req.query.id;           
        SqlSource.deleteCliente(clienteId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}