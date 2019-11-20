import { Component, OnInit } from '@angular/core';
import { DatosGraficasService } from '../datos-graficas.service';
import { Chart } from 'chart.js';


//install charts -> npm install chart.js --save


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  chart = [];

  constructor(private _datos: DatosGraficasService) { }

  ngOnInit() {
    this._datos.registroGlucosa().subscribe(res => {
      console.log(res)

      let toma = res['toma'].map(res => res.main.toma);
      let fecha = res['fecha'].map(res => res.main.fecha);
      console.log(toma+fecha);
      //let alldates = res['list'].map(res => res.dt)

      // let weatherDates = []
      // alldates.forEach((res) => {
      //     let jsdate = new Date(res * 1000)
      //     weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
      // })
    })
  }

}
