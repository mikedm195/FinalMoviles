export interface SqlRepository
{
  isClienteAuth(email: string, password: string): Promise<any>;
  
  saveAgencia(agencia: any): Promise<number>;
  setAgencia(agencia: any): Promise<void>;
  getAgencia(agenciaId: number): Promise<any>;
  deleteAgencia(agenciaId: number): Promise<void>;

  saveViaje(viaje: any): Promise<number>;
  setViaje(viaje: any): Promise<void>;
  getViaje(viajeId: number): Promise<any>;
  deleteViaje(viajeId: number): Promise<void>;

  saveCliente(cliente: any): Promise<number>;
  setCliente(cliente: any): Promise<void>;
  getCliente(clienteId: number): Promise<any>;
  deleteCliente(clienteId: number): Promise<void>;

  saveFecha(fecha: any): Promise<number>;
  setFecha(fecha: any): Promise<void>;
  getFecha(fechaId: number): Promise<any>;
  deleteFecha(fechaId: number): Promise<void>;

  savePlatillo(platillo: any): Promise<number>;
  setPlatillo(latillo: any): Promise<void>;
  getPlatillo(platilloId: number): Promise<any>;
  deletePlatillo(platilloId: number): Promise<void>;
    
}