import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


//instalar map -> npm install --save rxjs-compat


@Injectable({
  providedIn: 'root'
})
export class DatosGraficasService {

  constructor(private _http: HttpClient) { }

  registroGlucosa() {
    return this._http.get("http://127.0.0.1:8000/mostrarG/1")
      .map(result => result);
  }

}
