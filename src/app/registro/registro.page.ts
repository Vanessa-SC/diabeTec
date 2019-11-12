import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpService } from '../http.service';

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


  constructor(public http:HttpService, public route: Router, public toastController: ToastController) { }

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
    //console.log(this.usuario+' '+this.telefono+' '+this.correo+' '+this.contra+' '+this.genero+' '+this.tipoDiabetes+' '+this.fechaNac);
    this.http.registro(this.usuario,this.telefono,this.correo,this.contra,this.genero,this.tipoDiabetes,this.fechaNac).then(
      (inv) => {
        console.log(inv);
        var resultado;

        resultado = inv['resultado'];
        if(resultado == "insertado"){
 
         this.route.navigateByUrl('/home');
         this.mensajeToast("Bienvenido Amig@ "+this.usuario);
 
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

  async mensajeToast(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }
}
