import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.page.html',
  styleUrls: ['./peso.page.scss'],
})
export class PesoPage implements OnInit {

  idUsuario:string;
  peso:string;
  fecha:string;
  hora:string;
  pesoMax:string;
  pesoProm:string;
  pesoMin:string;

  constructor(
    private menu: MenuController, 
    public route:Router, 
    public activatedRoute:ActivatedRoute, 
    private storage:Storage,
    private http:HttpService
  ) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.mostrarDatos(this.idUsuario);
      this.mostrarDatosEst(this.idUsuario);
    });
  }

  ngOnInit() {
  }

  pesos:any;
  mostrarDatos(idUsuario:string){
    this.http.mostrarP(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.pesos = inv;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  mostrarDatosEst(idUsuario:string){
    this.http.mostrarPEst(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.pesoProm = inv['pesoProm'];
        this.pesoMax = inv['pesoMax'];
        this.pesoMin = inv['pesoMin'];
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }



}
