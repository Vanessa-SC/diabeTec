import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {


  idUsuario:string;



  constructor(
    private menu: MenuController, 
    public route:Router, 
    public activatedRoute:ActivatedRoute, 
    private storage:Storage,
    private http:HttpService,
    private toastController: ToastController
  ) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.mostrarDatos(this.idUsuario);
    });
  }

  ngOnInit() {
  }

  medicamentos:any;
  mostrarDatos(idUsuario:string){
    this.http.mostrarM(idUsuario).then(
      (inv) => {
        console.log(inv);
        this.medicamentos = inv;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

  eliminar(medicamento){
    this.http.eliminarM(this.idUsuario,medicamento.idMedicamento).then(
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

}
