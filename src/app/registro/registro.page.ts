import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

usuario:string;
telefono:string;
correo:string;
contra:string;
repiteContra:string;
genero:string;
tipoDiabetes:string;      
fechaNac:string;
terminosCheck:string;


  constructor(public route: Router, public toastController: ToastController) { }

  verificar(){
     if(this.usuario != undefined && this.telefono!=undefined && this.correo != undefined && this.contra != undefined && this.repiteContra != undefined && this.genero != undefined && this.tipoDiabetes != undefined && this.fechaNac != undefined &&  this.terminosCheck != undefined){
       this.nuevoUsuario();
     } else {
       this.alerta('Asegurese de llenar todos los campos.');
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

  ngOnInit() {
  }

  nuevoUsuario(){
    this.route.navigateByUrl("/home");
  }

}
