import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.page.html',
  styleUrls: ['./add-medicamento.page.scss'],
})
export class AddMedicamentoPage implements OnInit {

  constructor(public http:HttpService, private storage:Storage,public route: Router, public toastController: ToastController) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
    });
    //this.fecha = "2020-12-01";
  }

idUsuario:string;
unidades:string;
medicamento:string;
hora:string;
fecha:string;
recordatorio:string;
notas:string ="ninguna";

//fecha: any ;


  ngOnInit() {
  }

  guardar(){
    console.log(this.idUsuario+', '+this.unidades+', '+this.medicamento+', '+this.hora+', '+this.fecha+', '+this.recordatorio+', '+this.notas);
    this.http.agregarM(this.unidades,this.medicamento,this.hora,this.fecha,this.recordatorio,this.notas,this.idUsuario).then(
      (inv) => {
        console.log(inv);
        var resultado;

        resultado = inv['resultado'];
        if(resultado == "insertado"){
 
          this.mensajeToast("Toma agregada correctamente.");
          this.route.navigateByUrl('/medicamentos');
 
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
  guardarMedicamento(){
    if(this.unidades != undefined && this.medicamento != undefined && this.hora != undefined && this.fecha != undefined && this.recordatorio != undefined) {
      this.guardar();
    } else {
      console.log(this.fecha);
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

  async mensajeToast(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }

}
