import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})
export class PresionPage implements OnInit {
  
  idUsuario:string;
  sistolica:string;
  diastolica:string;
  pulso:string;
  fecha:string;
  hora:string;
  recordatorio:string;
  notas:string;

  constructor(private storage:Storage,public route: Router, public toastController:ToastController) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
    });
  }

  ngOnInit() {
  }

  guardarPresion(){
    if(this.sistolica != undefined && this.diastolica != undefined && this.pulso != undefined && this.fecha != undefined && this.hora != undefined){
      this.guardar();
    } else {
      this.alerta('Hay campos importantes sin llenar');
    }
  }
  guardar(){
    this.route.navigateByUrl("/inicio");
  }
  async alerta(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'middle',
      duration: 4000
    });
    toast.present();
  }

}
