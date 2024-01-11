import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  servidor = "http://localhost:3000";

  constructor(private servicio:HttpClient) { }

  mostrarUbicaciones(): Observable<any> {
    return this.servicio.get(`${this.servidor}/api/ubicaciones`);
  }

}
