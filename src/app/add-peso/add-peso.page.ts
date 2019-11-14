import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpService } from '../http.service';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-add-peso',
  templateUrl: './add-peso.page.html',
  styleUrls: ['./add-peso.page.scss'],
})
export class AddPesoPage implements OnInit {

idUsuario:string;
peso:string;
hora:string;
fecha:string;
notas:string;
  constructor(public http:HttpService,private storage:Storage,public route: Router, public toastController:ToastController) {
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
    });
   }

  ngOnInit() {
  }

  guardarPeso(){
    console.log(this.peso+', '+this.hora+', '+this.fecha+this+', '+this.notas);
    if(this.peso != undefined && this.hora != undefined && this.fecha != undefined){
      this.guardar()
    } else{
      this.alerta('Hay campos que no deben estar vacíos')
    }
  }
  guardar(){
    this.http.agregarP(this.peso,this.hora,this.fecha,this.notas,this.idUsuario).then(
      (inv) => {
        console.log(inv);
        var resultado;

        resultado = inv['resultado'];
        if(resultado == "agregada"){
 
          this.mensajeToast("Peso agregado correctamente.");
          this.route.navigateByUrl('/inicio');
 
        }else{
          this.mensajeToast("A ocurrido un error intenta mas tarde, o verifica tu conexion a internet");
        }
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
    //this.route.navigateByUrl("/inicio");
  }

  async alerta(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

  async mensajeToast(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }
}
