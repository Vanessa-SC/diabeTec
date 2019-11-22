import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-presion',
  templateUrl: './add-presion.page.html',
  styleUrls: ['./add-presion.page.scss'],
})
export class AddPresionPage implements OnInit {

  idUsuario:string;
  sistolica:string;
  diastolica:string;
  pulso:string;
  fecha:string;
  hora:string;
  recordatorio:string;
  notas:string;

  constructor(public http:HttpService, private storage:Storage,public route: Router, public toastController: ToastController) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
    });
  }

  ngOnInit() {
  }

  guardarPresion(){
    console.log(this.idUsuario+', '+this.sistolica+', '+this.diastolica+', '+this.pulso+', '+this.fecha+', '+this.hora+', '+this.recordatorio+', '+this.notas);
    if(this.sistolica != undefined && this.diastolica != undefined && this.pulso != undefined && this.fecha != undefined && this.hora != undefined){
      this.guardar();
    } else {
      this.alerta('Hay campos importantes sin llenar');
    }
  }
  guardar(){
    console.log(this.sistolica+', '+this.diastolica+', '+this.pulso+', '+this.fecha+', '+this.hora+', '+this.recordatorio+', '+this.notas+', '+this.idUsuario);
    this.http.agregarPA(this.sistolica,this.diastolica,this.pulso,this.fecha,this.hora,this.recordatorio,this.notas,this.idUsuario).then(
      (inv) => {
        console.log(inv);
        var resultado;

        resultado = inv['resultado'];
        if(resultado == "insertado"){
 
          this.mensajeToast("Presion arterial registrada correctamente.");
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
  }
  async alerta(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'middle',
      duration: 4000
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
