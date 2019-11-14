import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpService } from '../http.service';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-add-glucosa',
  templateUrl: './add-glucosa.page.html',
  styleUrls: ['./add-glucosa.page.scss'],
})
export class AddGlucosaPage implements OnInit {

  constructor(public http:HttpService, public route: Router, public toastController:ToastController,private storage:Storage) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
    });
  }

  idUsuario:string;
  glucosa:string; 
  hora:string;
  fecha:string;
  periodo:string;
  actividad:boolean;
  medicacion:boolean;
  recordatorio:string;
  notas:string;

  ngOnInit() {
  }

  agregarGlucosa(){
    console.log(this.glucosa+', '+this.hora+', '+this.fecha+this+', '+this.periodo+', '+this.actividad+', '+this.medicacion+', '+this.recordatorio+', '+this.notas);
    if(this.glucosa != undefined && this.hora!= undefined && this.fecha!= undefined && this.periodo!= undefined){
      this.guardar();
    }else {
      this.alerta('Hay campos que no deben estar vacíos')
    }
  }

  guardar(){
    this.http.agregarG(this.glucosa,this.hora,this.fecha,this.periodo,this.actividad,this.medicacion,this.recordatorio,this.notas,this.idUsuario).then(
      (inv) => {
        console.log(inv);
        var resultado;

        resultado = inv['resultado'];
        if(resultado == "agregada"){
 
          this.mensajeToast("Toma agregada correctamente.");
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

