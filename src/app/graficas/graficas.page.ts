import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';


// //install charts -> npm install chart.js --save


@Component({
	selector: 'app-graficas',
	templateUrl: './graficas.page.html',
	styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

	@ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

	private lineChart: Chart;
	constructor() { }

	ngOnInit() {
		this.lineChart = new Chart(this.lineCanvas.nativeElement, {
			type: "line",
			data: {
				labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
				datasets: [
					{
						label: "Glucosa",
						fill: false,
						lineTension: 1,
						backgroundColor: "rgba(75,192,192,0.4)",
						borderColor: "rgba(75,192,192,1)",
						borderCapStyle: "butt",
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: "miter",
						pointBorderColor: "rgba(75,192,192,1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75,192,192,1)",
						pointHoverBorderColor: "rgba(220,220,220,1)",
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [65, 59, 80, 81, 56, 55, 40],
						spanGaps: false
					}
				]
			}
		});
	}
}
