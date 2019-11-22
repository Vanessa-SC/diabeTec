import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  url = "http://127.0.0.1:8000/";

  getData(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
  updateP(idPeso:string,peso:string,hora:string,fecha:string,nota:string) {
    var envio =this.url+'updateP/'+idPeso+'/'+peso+'/'+hora+'/'+fecha+'/'+nota;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
}
