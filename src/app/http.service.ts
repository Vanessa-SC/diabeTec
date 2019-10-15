import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }


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
