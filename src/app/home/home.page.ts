import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  correo:string;
  contra:string;


  constructor( public http:HttpService, private storage: Storage, public toastController: ToastController, public route: Router) {}

  verificar(){

      if( this.correo != undefined && this.contra != undefined){
        this.inicio();
      } else {
        this.alerta('Uno o más campos están vacíos');
      }
  }

  inicio() {
    console.log(this.correo+this.contra);
    this.http.login(this.correo,this.contra).then(
      (inv) => {
        console.log(inv);
        var id=inv['idUsuario'];
        var pass=inv['contrasena'];
        console.log(id);
          this.storage.set('contrasena',pass);
          this.storage.set('idUsuario', id);
          if(id != 0){
            if(id == -2){
              this.mensaje();
            } else {
                this.route.navigateByUrl('/inicio');
              }
          } else {
            this.presentToast();
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

  async mensaje() {
    const toast = await this.toastController.create({
      message: 'Contraseña Incorrecta.',
      duration: 2000
    });
    toast.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contraseña y/o usuario incorrecto',
      duration: 2000
    });
    toast.present();
  }
}
