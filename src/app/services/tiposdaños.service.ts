import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposdañosService {

  servidor = "http://localhost:3000";

  constructor(private servicio:HttpClient) { }

  mostrarTiposDaños(): Observable<any> {
    return this.servicio.get(`${this.servidor}/api/tiposdanio`);
  }

  mostrarDetallesDaño(idtipodanio:any): Observable<any> {
    return this.servicio.get(`${this.servidor}/api/detallesdanio/` + idtipodanio);
  }
}
