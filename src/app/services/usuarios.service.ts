import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Usuarios {

  servidor = "http://localhost:3000";

  constructor(private servicio:HttpClient) { }

  MostrarUsuarios():Observable<any> {
    return this.servicio.get(`${this.servidor}/api/usuarios`);
  }

  verificarUsuario(usuario:any): Observable<any> {
    return this.servicio.post(`${this.servidor}/api/verificarusuario`, usuario);
  }

  verificarCorreo(email:any): Observable<any> {
    return this.servicio.post(`${this.servidor}/api/verificarcorreo`, email);
  }
  
  CrearUsuario(usuario:any): Observable<any> {
    return this.servicio.post(`${this.servidor}/api/usuario`, usuario);
  }
}
