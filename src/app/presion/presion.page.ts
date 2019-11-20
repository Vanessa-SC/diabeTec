import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})
export class PresionPage implements OnInit {
  
  idUsuario:string;

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
    });
  }

  ngOnInit() {
  }

  presiones:any;
  mostrarDatos(idUsuario:string){
    this.http.mostrarPA(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.presiones = inv;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

}
