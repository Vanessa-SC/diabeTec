import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  correo: string = "";
  pass: string;
  idUsuario: string;
  email:string;

  constructor(
    private http: HttpService,
    private storage: Storage,
    public toastController: ToastController,
    public route: Router,
    public alertCtrl: AlertController) {
    storage.get("contrasena").then((val) => {
      console.log('contrasena', val);
      this.pass = val;
    });
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
    });
    storage.get("email").then((val) => {
      console.log('email', val);
      this.email = val;
    });
  }

  ngOnInit() {

  }

  confirmar() {
    if (this.correo == "") {
      this.mensajeToast("¡Correo vacío!");
    } else{
      if(this.correo != this.email){
          this.mensajeToast("Verifique su correo");
      } else {
        this.confirmarContra();
      }
    }
    
  }
  

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  desactivar() {
    console.log(this.correo);
    this.http.desactivar(this.correo).then(
      (inv) => {
        console.log(inv);
        var email = inv['email'];
        //  if(email == 'verificar'){
        //   this.presentToast("El correo es incorrecto");
        // } else {
        if (email == 'no existe') {
          this.presentToast("El correo no existe");
        } else {
          this.route.navigateByUrl('home');
        }
        // }
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  async confirmarContra() {
    let alert = this.alertCtrl.create({
      header: 'Confirmación',
      subHeader: 'Ingrese su contraseña',
      inputs: [
        {
          name: 'password',
          placeholder: 'Ingrese su contraseña',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            if (data.password == this.pass) {
              this.desactivar();
            } else {
              this.mensajeToast('Contraseña incorrecta')
              return false;
            }
          }
        }
      ]
    });
    (await alert).present();
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }
}
