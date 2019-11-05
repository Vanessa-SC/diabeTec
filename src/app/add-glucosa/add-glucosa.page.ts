import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-glucosa',
  templateUrl: './add-glucosa.page.html',
  styleUrls: ['./add-glucosa.page.scss'],
})
export class AddGlucosaPage implements OnInit {

  constructor(public route: Router, public toastController:ToastController) { }
g:string; 
hora:string;
fecha:string;
periodo:string;
actividad:string;
medicacion:string;
recordatorio:string;
notas:string;

  ngOnInit() {
  }

  agregarGlucosa(){
    if(this.g != undefined && this.hora!= undefined && this.fecha!= undefined && this.periodo!= undefined && this.actividad!= undefined && this.medicacion!= undefined){
      this.guardar();
    }else {
      this.alerta('Hay campos que no deben estar vacíos')
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

