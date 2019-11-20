import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  idUsuario:string;
  ultima=0;
  promedio=0;

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
        console.log(this.idUsuario);
        this.mostrarDatos(this.idUsuario);
      });
    }


  ngOnInit() {
  }

  glucosa:any;
  mostrarDatos(idUsuario:string){
    this.http.glucosaAvgUlt(idUsuario).then(
      (inv) => {
        console.log(inv);
        var ult=inv['ultima'];
        var prom=inv['promedio'];
        this.ultima = ult;
        this.promedio = prom;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  openFirst() {
    console.log("click OpenFirst");
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  irA(vinculo:string){
    console.log(vinculo);

    this.route.navigateByUrl(vinculo);
  }

  close(vinculo:string){
    console.log(vinculo);
    this.storage.set('contrasena',"");
    this.storage.set('idUsuario',"");
    this.route.navigateByUrl(vinculo);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.mostrarDatos(this.idUsuario);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
