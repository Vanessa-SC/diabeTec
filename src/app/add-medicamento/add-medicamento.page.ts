import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.page.html',
  styleUrls: ['./add-medicamento.page.scss'],
})
export class AddMedicamentoPage implements OnInit {

  constructor(public route: Router, public toastController: ToastController) { }

unidades:string;
medicamento:string;
hora:string;
fecha:string;
recordatorio:string;
notas:string;

  ngOnInit() {
  }

  guardar(){
    this.route.navigateByUrl("/inicio");
  }
  guardarMedicamento(){
    if(this.unidades != undefined && this.medicamento != undefined && this.hora != undefined && this.fecha != undefined && this.recordatorio != undefined) {
      this.guardar();
    } else {
      this.alerta('Hay campos que no deben estar vacíos')
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
