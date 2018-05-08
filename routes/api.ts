import { NextFunction, Request, Response, Router } from "express";
import AgenciaCtrl from "./controller/AgenciaCtrl";
import ClienteCtrl from "./controller/ClienteCtrl";
import FechaCtrl from "./controller/FechaCtrl";
import PlatilloCtrl from "./controller/PlatilloCtrl";
import ViajeCtrl from "./controller/ViajeCtrl";


export class Api
{

  router: Router
  agenciaCtrl: AgenciaCtrl;
  clienteCtrl: ClienteCtrl;
  fechaCtrl: FechaCtrl;
  platilloCtrl: PlatilloCtrl;
  viajeCtrl: ViajeCtrl;

  constructor()
  {
    this.router = Router();
    this.agenciaCtrl = new AgenciaCtrl();
    this.clienteCtrl = new ClienteCtrl();
    this.fechaCtrl = new FechaCtrl();
    this.platilloCtrl = new PlatilloCtrl();
    this.viajeCtrl = new ViajeCtrl();
    
    this.init();
  }

  public init() : Api
  {

    this.router.get('/cliente/auth/', this.clienteCtrl.isClienteAuth);

    this.router.get('/agencia/', this.agenciaCtrl.getAgencia);    
    this.router.post('/agencia/', this.agenciaCtrl.saveAgencia);
    this.router.put('/agencia/', this.agenciaCtrl.setAgencia);
    this.router.delete('/agencia/', this.agenciaCtrl.deleteAgencia);    

    this.router.get('/cliente/', this.clienteCtrl.getCliente);
    this.router.post('/cliente/', this.clienteCtrl.saveCliente);
    this.router.put('/cliente/', this.clienteCtrl.setCliente);
    this.router.delete('/cliente/',this.clienteCtrl.deleteCliente);

    this.router.get('/fecha/', this.fechaCtrl.getFecha);
    this.router.post('/fecha/', this.fechaCtrl.saveFecha);
    this.router.put('/fecha/', this.fechaCtrl.setFecha);
    this.router.delete('/fecha/',this.fechaCtrl.deleteFecha);

    this.router.get('/platillo/', this.platilloCtrl.getPlatillo);
    this.router.post('/platillo/', this.platilloCtrl.savePlatillo);
    this.router.put('/platillo/', this.platilloCtrl.setPlatillo);
    this.router.delete('/platillo/',this.platilloCtrl.deletePlatillo);

    this.router.get('/viaje/', this.viajeCtrl.getViaje);
    this.router.post('/viaje/', this.viajeCtrl.saveViaje);
    this.router.put('/viaje/', this.viajeCtrl.setViaje);
    this.router.delete('/viaje/',this.viajeCtrl.deleteViaje);
       
    return this;
  }
}

export default new Api().init().router;