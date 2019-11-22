import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})
export class PresionPage implements OnInit {
  
  idUsuario:string;
  toastController: any;

  constructor(
    private menu: MenuController, 
    public route:Router, 
    public activatedRoute:ActivatedRoute, 
    private storage:Storage,
    private http:HttpService
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
/* this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
      .then((res) => {
        alert("Row Deleted!");
        this.getRows();
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      }); */
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

}
