import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NewsService } from '../news.service';
import { Storage } from '@ionic/Storage';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-peso',
  templateUrl: './view-peso.page.html',
  styleUrls: ['./view-peso.page.scss'],
})
export class ViewPesoPage implements OnInit {
  idUsuario:string;
  idPeso:string;
  peso:string;
  fecha:string;
  hora:string;
  nota:string;

  constructor(
    private storage:Storage,
    private http:HttpService,
    private https:NewsService,
    public toastController: ToastController, 
    public route: Router,
    public alertCtrl: AlertController) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      console.log('idPeso', val);
      this.idUsuario = val;
      this.idPeso = val;
      this.mostrarDatos(this.idPeso);
    });
  }

  ngOnInit() {
  }

  mostrarDatos(idPeso:string){
    this.http.pesos(idPeso).then(
      (inv) => {
        console.log(inv);
        var peso = inv['peso'];
        var fecha = inv['fecha'];
        var hora = inv['hora'];
        var nota = inv['nota'];

        this.peso = peso;
        this.fecha = fecha;
        this.hora = hora;
        this.nota = nota;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  actualizar() {
    this.updateP(this.idPeso, this.peso, this.hora, this.fecha, this.nota);
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }
  
  pesos: any;
  updateP(idPeso:string, peso:string, hora:string, fecha:string, nota:string) {
    this.https.updateP(idPeso, peso, hora, fecha, nota).then(
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
}
