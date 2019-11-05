import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  correo:string;
  contra:string;


  constructor(public route: Router,public toastController: ToastController) {}

  verificar(){

      if( this.correo != undefined && this.contra != undefined){
        this.route.navigateByUrl('/home');
      } else {
        this.alerta('Uno o más campos están vacíos');
      }
  }
  
  async alerta(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }
}
