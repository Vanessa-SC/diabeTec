import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Storage } from '@angular/Storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(public http: HttpClient) { }

  httpConexion = "http://127.0.0.1:8000/";



  login(correo: string, contra: string) {
    var url = this.httpConexion + 'login/' + correo + '/' + contra;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  registro(nombre: string, telefono: string, email: string, contra: string, sexo: string, tipoDiab: string, fechaNac: string) {
    var url = this.httpConexion + 'registro/' + nombre + '/' + telefono + '/' + email + '/' + contra + '/' + sexo + '/' + tipoDiab + '/' + fechaNac;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  perfil(idUsuario) {
    var url = this.httpConexion + 'perfil/' + idUsuario + '/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  pesos(idPeso) {
    var url = this.httpConexion + 'peso/' + idPeso + '/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  desactivar(email:string) {
    var url = this.httpConexion + 'desactivar/' + email + '/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

//updateU/{nombre}/{telefono}/{sexo}/{tipoDiab}/{estatura}/{idUsuario}

  updateU(nombreM: string, telefonoM: string, estaturaM: string,idUsuario:string) {
    var url = this.httpConexion + 'updateU/' + nombreM + '/' + telefonoM + '/' + estaturaM + '/' + idUsuario + '/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  //agregarG/{glucosa}/{hora}/{fecha}/{periodo}/{actividad}/{medicacion}/{recordatorio}/{nota}
  agregarG(glucosa: string, hora: string, fecha: string, periodo: string, actividad: boolean, medicacion: boolean, recordatorio: string, nota: string, idUsuario: string) {
    var url = this.httpConexion + 'agregarG/' + glucosa + '/' + hora + '/' + fecha + '/' + periodo + '/' + actividad + '/' + medicacion + '/' + recordatorio + '/' + nota + '/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  mostrarG(idUsuario: string) {
    var url = this.httpConexion + 'mostrarG/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  eliminarG(idUsuario: string, idGlucosa: any) {
    var url = this.httpConexion + 'eliminarG/' + idUsuario+'/'+idGlucosa;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  //agregarP/{peso}/{hora}/{fecha}/{notas}/{idUsuario}
  agregarP(peso: string, hora: string, fecha: string, notas: string, idUsuario: string) {
    var url = this.httpConexion + 'agregarP/' + peso + '/' + hora + '/' + fecha + '/' + notas + '/' + idUsuario + '/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
  mostrarP(idUsuario: string) {
    var url = this.httpConexion + 'mostrarP/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
  mostrarPEst(idUsuario: string) {
    var url = this.httpConexion + 'mostrarPEst/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
  ultimoP(idUsuario: string) {
    var url = this.httpConexion + 'ultimoP/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  eliminarP(idUsuario: string, idPeso: any) {
    var url = this.httpConexion + 'eliminarP/' + idUsuario+'/'+idPeso;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateP(pesoMod: string, horaMod: string, fechaMod: string, idUsuario: string, idPeso: string) {
    var url = this.httpConexion + 'updateP/' + pesoMod+'/'+horaMod+'/'+fechaMod+'/'+idUsuario+'/'+idPeso+'/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  //agregarM/{dosis}/{descripcion}/{hora}/{fecha}/{recordatorio}/{notas}/{idUsuario}
  agregarM(dosis: string, descripcion: string, hora: string, fecha: string, recordatorio: string, notas: string, idUsuario: string) {
    var url = this.httpConexion + 'agregarM/' + dosis + '/' + descripcion + '/' + hora + '/' + fecha + '/' + recordatorio + '/' + notas + '/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
  mostrarM(idUsuario: string) {
    var url = this.httpConexion + 'mostrarM/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  eliminarM(idUsuario: string, idMedicamento: any) {
    var url = this.httpConexion + 'eliminarM/' + idUsuario+'/'+idMedicamento;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateM(descripcion: string, dosis: string, hora: string, idUsuario: string, idMedicamento: string) {
    var url = this.httpConexion + 'updateM/' + descripcion+'/'+dosis+'/'+hora+'/'+idUsuario+'/'+idMedicamento+'/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  //,sistolica,diastolica,pulso,fecha,hora,recordatorio,notas,,idUsuario
  agregarPA(sistolica: string, diastolica: string, pulso: string, fecha: string, hora: string, recordatorio: string, notas: string, idUsuario: string) {
    var url = this.httpConexion + 'agregarPA/' + sistolica + '/' + diastolica + '/' + pulso + '/' + fecha + '/' + hora + '/' + recordatorio + '/' + notas + '/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  mostrarPA(idUsuario: string) {
    var url = this.httpConexion + 'mostrarPA/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  eliminarPA(idUsuario: string, idPresionArterial: any) {
    var url = this.httpConexion + 'eliminarPA/' + idUsuario+'/'+idPresionArterial;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  glucosaAvgUlt(idUsuario: string) {
    var url = this.httpConexion + 'glucosaAvgUlt/' + idUsuario;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  updatePA(sistolica: string, diastolica: string, pulso: string,fecha:string,hora:string, idUsuario: string, idPA: string) {
    var url = this.httpConexion + 'updatePA/' + sistolica+'/'+diastolica+'/'+pulso+'/'+fecha+'/'+hora+'/'+idUsuario+'/'+idPA+'/';
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

}
