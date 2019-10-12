import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

  irA(vinculo:string){
    console.log(vinculo);

    this.route.navigateByUrl(vinculo);
  }
}
