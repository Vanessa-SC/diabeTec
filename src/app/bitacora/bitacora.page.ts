import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.page.html',
  styleUrls: ['./bitacora.page.scss'],
})
export class BitacoraPage implements OnInit {

  idUsuario:string;
  idGlucosa:string;
  glucosa:string;

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
      console.log('idGlucosa', val);
      this.idUsuario = val;
      this.idGlucosa = val;
      this.mostrarDatos(this.idUsuario);
    });
  }

  ngOnInit() {
  }

  glucosas:any;
  mostrarDatos(idUsuario:string){
    this.http.mostrarG(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.glucosas = inv;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

  eliminar(glucosa){
    this.http.eliminarG(this.idUsuario,glucosa.idGlucosa).then(
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

  doRefresh(event) {
    console.log('Begin async operation');
    this.mostrarDatos(this.idUsuario);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  modificar(tomaG,horaG,fechaG,notaG,idGlucosa){
    this.http.updateG(tomaG,horaG,fechaG,notaG,this.idUsuario,idGlucosa).then(
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

  async alerta(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }
  

  async actualizar( glucosa ) {
    let alert = this.alertCtrl.create({
      header: 'Actualizar',
      inputs: [
        {
          label: 'toma',
          name: 'toma',
          placeholder: 'Glucosa',
          value: glucosa.toma,
          type: 'text'
        },
        {
          label: 'fecha',
          name: 'fecha',
          value: glucosa.fecha,
          type: 'date'
        },
        {
          label: 'hora',
          name: 'hora',
          value: glucosa.hora,
          type: 'time'
        },
        {
          label: 'nota',
          name: 'nota',
          placeholder: 'Nota',
          value: glucosa.nota,
          type: 'text'
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
            this.modificar(data.toma,data.hora,data.fecha,data.nota,glucosa.idGlucosa);
          }
        }
      ]
    });
    (await alert).present();
  }
}

