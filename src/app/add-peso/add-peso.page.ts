import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-peso',
  templateUrl: './add-peso.page.html',
  styleUrls: ['./add-peso.page.scss'],
})
export class AddPesoPage implements OnInit {

peso:string;
hora:string;
fecha:string;
notas:string;
  constructor(public route: Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  guardarPeso(){
    if(this.peso != undefined && this.hora != undefined && this.fecha != undefined){
      this.guardar()
    } else{
      this.alerta('Asegurese de que el peso, hora y fecha estén llenados');
    }
  }
  guardar(){
    this.route.navigateByUrl("/inicio");
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
