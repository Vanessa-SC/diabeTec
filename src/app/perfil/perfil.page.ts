import { Component, OnInit,ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { HttpService } from '../http.service';
import { Storage } from '@ionic/Storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idUsuario:string;
  email:string;
  nombre:string;
  telefono:string;
  sexo:string;
  tipoDiabetes:string;
  fecha_nac:string;
  ultimoPeso:string;
  estatura:string;

  constructor(
    public route:Router,
    private storage:Storage,
    private http:HttpService,
    private changeDetector: ChangeDetectorRef,
    public toastController: ToastController
  ) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.mostrarDatos(this.idUsuario);
      this.peso(this.idUsuario);
    });
  }

  ngOnInit() {
  }

  //MOSTRAR DATOS

  mostrarDatos(idUsuario:string){
    this.http.perfil(idUsuario).then(
      (inv) => {
        console.log(inv);
        var email = inv['email'];
        var nombre = inv['nombre'];
        var telefono = inv['telefono'];
        var sexo = inv['sexo'] ;
        var tipoDiabetes = inv['tipoDiabetes'] ;
        var fecha_nac = inv['fecha_nac'] ;
        var estatura = inv['estatura'];

        this.tipoDiabetes = tipoDiabetes;
        this.sexo = sexo;
        this.email = email;
        this.nombre = nombre;
        this.telefono = telefono;
        this.tipoDiabetes = tipoDiabetes;
        this.fecha_nac = fecha_nac;
        this.estatura = estatura;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  peso(idUsuario:string){
    this.http.ultimoP(idUsuario).then(
      (inv) => {
        console.log(inv);
        var peso = inv['peso'];
        this.ultimoPeso = peso;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.mostrarDatos(this.idUsuario);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }


  //MODIFICAR

  nombreM:string;
  telefonoM:string;
  estaturaM:string;

  verificar(){
    if(this.nombreM != undefined && this.telefonoM!=undefined  && this.estaturaM != undefined){
      this.actualizar();
    } else {
      this.alerta('Asegurese de llenar todos los campos.');
    }
 }

 actualizar(){
   console.log(this.idUsuario);
   console.log(this.nombreM+this.telefonoM+this.estaturaM+this.idUsuario);
   //updateU/{nombre}/{telefono}/{sexo}/{tipoDiab}/{estatura}/{idUsuario}
  this.http.updateU( this.nombreM,this.telefonoM,this.estaturaM,this.idUsuario).then(
    (inv) => {
      console.log(inv);
      var resultado;
      resultado = inv['resultado'];
      if(resultado == "actualizado"){
        this.mostrarDatos(this.idUsuario);
        this.mensajeToast("Actualizado correctamente!");
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
