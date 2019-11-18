import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Storage } from '@ionic/Storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idUsuario:string;
  email:string;
  nombre:string;
  telefono:string;
  sexo:string;
  tipoDiabetes:string;
  fecha_nac:string;
  ultimoPeso:string;
  estatura:string;

  nombreM:string;
  telefonoM:string;
  sexoM:string;
  tipoDiabetesM:string;
  estaturaM:string;

  constructor(
    public route:Router,
    private storage:Storage,
    private http:HttpService
  ) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.mostrarDatos(this.idUsuario);
      this.peso(this.idUsuario);
    });
  }

  ngOnInit() {
  }

  mostrarDatos(idUsuario:string){
    this.http.perfil(idUsuario).then(
      (inv) => {
        console.log(inv);
        var email = inv['email'];
        var nombre = inv['nombre'];
        var telefono = inv['telefono'];
        var sexo = inv['sexo'] ;
        var tipoDiabetes = inv['tipoDiabetes'] ;
        var fecha_nac = inv['fecha_nac'] ;

        if(sexo == "femenino"){this.sexo = 'Femenino';}
        if(sexo == "masculino"){this.sexo = 'Masculino';}
        if(sexo == "sin especificar"){this.sexo = 'Sin especificar';}

        this.email = email;
        this.nombre = nombre;
        this.telefono = telefono;
        this.tipoDiabetes = tipoDiabetes;
        this.fecha_nac = fecha_nac;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  peso(idUsuario:string){
    this.http.ultimoP(idUsuario).then(
      (inv) => {
        console.log(inv);
        var peso = inv['peso'];
        this.ultimoPeso = peso;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      });
  }

}
