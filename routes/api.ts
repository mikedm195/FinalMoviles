import { NextFunction, Request, Response, Router } from "express";
import AgenciaCtrl from "./controller/AgenciaCtrl";


export class Api
{

  router: Router
  agenciaCtrl: AgenciaCtrl;  

  constructor()
  {
    this.router = Router();
    this.agenciaCtrl = new AgenciaCtrl();
    
    this.init();
  }

  public init() : Api
  {

    this.router.get('/cliente/auth/', null);

    this.router.get('/agencia/', this.agenciaCtrl.getAgencia);    
    this.router.post('/agencia/', this.agenciaCtrl.saveAgencia);
    this.router.put('/agencia/', this.agenciaCtrl.setAgencia);
    this.router.delete('/agencia/', this.agenciaCtrl.deleteAgencia);    

    this.router.get('/viaje/', null);
    this.router.post('/viaje/', null);
    this.router.put('/viaje/', null);
    this.router.delete('/viaje/',null);    

    return this;
  }
}

export default new Api().init().router;