import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})
export class PresionPage implements OnInit {
  
  idUsuario:string;
  

  constructor(
    private menu: MenuController, 
    public route:Router, 
    public activatedRoute:ActivatedRoute, 
    private storage:Storage,
    private http:HttpService,
    private toastController: ToastController,
    private alertCtrl: AlertController
  ) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.mostrarDatos(this.idUsuario);
    });
  }

  ngOnInit() {
  }

  presiones:any;
  mostrarDatos(idUsuario:string){
    this.http.mostrarPA(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.presiones = inv;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  eliminar(presion){
    this.http.eliminarPA(this.idUsuario,presion.idPresionArterial).then(
      (inv) => {
        console.log(inv);
        var estado = inv['resultado'];
        if (estado == "eliminado"){
          this.alerta("Eliminado correctamente");
          this.mostrarDatos(this.idUsuario);
        } else {
          this.alerta("No se pudo eliminar, intente mas tarde");
        }
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
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

  doRefresh(event) {
    console.log('Begin async operation');
    this.mostrarDatos(this.idUsuario);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  modificar(sistolicaMod,diastolicaMod,pulsoMod,fechaMod,horaMod,idPresion){
    this.http.updatePA(sistolicaMod,diastolicaMod,pulsoMod,fechaMod,horaMod,this.idUsuario,idPresion).then(
      (inv) => {
        console.log(inv);
        var estado = inv['resultado'];
        if (estado == "actualizado"){
          this.alerta("Actualizado con éxito.");
          this.mostrarDatos(this.idUsuario);
        } else {
          this.alerta("No se pudo eliminar, intente mas tarde");
        }
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  async actualizar( presion ) {
    let alert = this.alertCtrl.create({
      header: 'Actualizar',
      inputs: [
        {
          label: 'Sistolica',
          name: 'sistolica',
          placeholder: 'Sistolica',
          value: presion.sistolica,
          type: 'text'
        },
        {
          label: 'Diastolica',
          name: 'diastolica',
          placeholder: 'Diastolica',
          value: presion.diastolica,
          type: 'text'
        },
        {
          label:'Pulso',
          name: 'pulso',
          placeholder: 'Pulso',
          value: presion.pulso,
          type: 'text'
        },
        {
          label: 'fecha',
          name: 'fecha',
          value: presion.fecha,
          type: 'date'
        },
        {
          label: 'hora',
          name: 'hora',
          value: presion.hora,
          type: 'time'
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
          text: 'Guardar',
          handler: data => {
            this.modificar(data.sistolica,data.diastolica,data.pulso,data.fecha,data.hora,presion.idPresionArterial);
          }
        }
      ]
    });
    (await alert).present();
  }

}
