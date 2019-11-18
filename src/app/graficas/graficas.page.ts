import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';


//install charts -> npm install chart.js --save


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {
  
  private intervalUpdate: any = null;
  public chart: any = null;

  constructor(private http: HttpClient) { }

  private showData(): void {
    //console.log(1);
  }


  private getFromAPI(): Observable<any> {
    return this.http.get(
      'http://127.0.0.1:8000/mostrarG/1',
      { responseType: 'json' }
    );
  }

  ngOnInit(): void {
    this.intervalUpdate = setInterval(function () {
      this.showData();
    }.bind(this), 500);

    this.chart = new Chart('realtime', {
      type: 'line',
      data: {
       labels: [],
       datasets: [
         {
        label: 'Data',
        fill: false,
        data: [],
        backgroundColor: '#168ede',
        borderColor: '#168ede'
         }
       ]
        },
        options: {
       tooltips: {
        enabled: false
       },
       legend: {
        display: true,
        position: 'bottom',
        labels: {
         fontColor: 'white'
        }
       },
       scales: {
         yAxes: [{
          ticks: {
           fontColor: "white"
          }
         }],
         xAxes: [{
        ticks: {
         fontColor: "white",
         beginAtZero: true
        }
         }]
       }
        }
     });

    this.getFromAPI().subscribe(response => {
   
    }, error => {
     console.error("ERROR: Unexpected response");
    });
  }

  

  private ngOnDestroy(): void {
    clearInterval(this.intervalUpdate);
  }

}
