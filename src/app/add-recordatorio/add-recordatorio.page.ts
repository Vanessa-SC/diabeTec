import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-recordatorio',
  templateUrl: './add-recordatorio.page.html',
  styleUrls: ['./add-recordatorio.page.scss'],
})
export class AddRecordatorioPage implements OnInit {

  hora:string;
  fecha:string;
  repeticion:string;
  notas:string;

  constructor(public route: Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  guardarRecordatorio(){
    if(this.repeticion != undefined && this.hora != undefined && this.fecha != undefined){
      this.guardar()
    } else{
      this.alerta('Asegurese de que la hora, fecha y periodo de repeticion estén llenados');
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
