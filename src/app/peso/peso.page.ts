import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.page.html',
  styleUrls: ['./peso.page.scss'],
})
export class PesoPage implements OnInit {

  idUsuario:string;
  idPeso:string;
  peso:string;
  fecha:string;
  hora:string;
  pesoMax:string;
  pesoProm:string;
  pesoMin:string;

  pesoMod:string;
  horaMod:string;
  fechaMod:string;

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
      console.log('idPeso', val);
      this.idUsuario = val;
      this.idPeso = val;
      this.mostrarDatos(this.idUsuario);
      this.mostrarDatosEst(this.idUsuario);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.mostrarDatos(this.idUsuario);
    this.mostrarDatosEst(this.idUsuario);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }

  ngOnInit() {
  }

  pesos:any;
  mostrarDatos(idUsuario:string){
    this.http.mostrarP(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.pesos = inv;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  mostrarDatosEst(idUsuario:string){
    this.http.mostrarPEst(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.pesoProm = inv['pesoProm'];
        this.pesoMax = inv['pesoMax'];
        this.pesoMin = inv['pesoMin'];
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  eliminar(peso){
    this.http.eliminarP(this.idUsuario,peso.idPeso).then(
      (inv) => {
        console.log(inv);
        var estado = inv['resultado'];
        if (estado == "eliminado"){
          this.alerta("Eliminado correctamente");
          this.mostrarDatos(this.idUsuario);
          this.mostrarDatosEst(this.idUsuario);
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

  modificar(pesoMod,horaMod,fechaMod,idPeso){
    this.http.updateP(pesoMod,horaMod,fechaMod,this.idUsuario,idPeso).then(
      (inv) => {
        console.log(inv);
        var estado = inv['resultado'];
        if (estado == "actualizado"){
          this.alerta("Actualizado con éxito.");
          this.mostrarDatos(this.idUsuario);
          this.mostrarDatosEst(this.idUsuario);

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
  

  async actualizar( Peso ) {
    let alert = this.alertCtrl.create({
      header: 'Actualizar',
      inputs: [
        {
          label: 'peso',
          name: 'peso',
          placeholder: 'Peso',
          value: Peso.peso,
          type: 'text'
        },
        {
          label: 'fecha',
          name: 'fecha',
          value: Peso.fecha,
          type: 'date'
        },
        {
          label: 'hora',
          name: 'hora',
          value: Peso.hora,
          type: 'time'
        },
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
            this.modificar(data.peso,data.hora,data.fecha,Peso.idPeso);
          }
        }
      ]
    });
    (await alert).present();
  }

}
