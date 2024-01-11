import { Router } from '@angular/router';

import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'
import { AccesoTokenService } from '../services/acceso-token.service';
import { Usuario } from '../interface/usuario';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  infoUsuario:Usuario[] = [];

  constructor(private accesoToken:AccesoTokenService, private router:Router, private observer: BreakpointObserver, private cd:ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.accesoToken.verificarLogeado();
    this.infoUsuario = this.accesoToken.obtenerInfoToken();
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((resp: any) => {
      if(resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
    this.cd.detectChanges();
  } 

  Salir(){
    this.accesoToken.salirToken();
  }
}
