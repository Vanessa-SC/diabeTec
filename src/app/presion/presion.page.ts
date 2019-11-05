import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})
export class PresionPage implements OnInit {
  sistolica:string;
  diastolica:string;
  pulso:string;
  fecha:string;
  hora:string;
  recordatorio:string;
  notas:string;

  constructor(public route: Router, public toastController:ToastController) { }

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
