import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Storage } from '@angular/Storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  httpConexion = "http://127.0.0.1:8000/";



  login( correo:string, contra:string){
    var url = this.httpConexion + 'login/'+correo+'/'+contra;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);    
         });
    });
  }

  registro(nombre:string,telefono:string,email:string,contra:string,sexo:string,tipoDiab:string,fechaNac:string){
    var url = this.httpConexion + 'registro/'+nombre+'/'+telefono+'/'+email+'/'+contra+'/'+sexo+'/'+tipoDiab+'/'+fechaNac;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) =>{
           reject(err);    
         });
    });
  }

  //agregarG/{glucosa}/{hora}/{fecha}/{periodo}/{actividad}/{medicacion}/{recordatorio}/{nota}
  agregarG(glucosa:string,hora:string,fecha:string,periodo:string,actividad:boolean,medicacion:boolean,recordatorio:string,nota:string,idUsuario:string){
    var url = this.httpConexion + 'agregarG/'+glucosa+'/'+hora+'/'+fecha+'/'+periodo+'/'+actividad+'/'+medicacion+'/'+recordatorio+'/'+nota+'/'+idUsuario;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) =>{
           reject(err);    
         });
    });
  }

  //agregarM/{dosis}/{descripcion}/{hora}/{fecha}/{recordatorio}/{notas}/{idUsuario}
  agregarM(dosis:string,descripcion:string,hora:string,fecha:string,recordatorio:string,notas:string,idUsuario:string){
    var url = this.httpConexion + 'agregarM/'+dosis+'/'+descripcion+'/'+hora+'/'+fecha+'/'+recordatorio+'/'+notas+'/'+idUsuario;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) =>{
           reject(err);    
         });
    });
  }


  traerNoticias(){

    return new Promise((resolve, reject) => {
     // var url = "https://randomuser.me/api/?results=25";
     this.http.get("assets/data/noticias.json")
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);    
         });
    });
   }

}
