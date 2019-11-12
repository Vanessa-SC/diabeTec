import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menu: MenuController, public route:Router, public activatedRoute:ActivatedRoute, private storage:Storage) { }

  ngOnInit() {
  }

  openFirst() {
    console.log("click OpenFirst");
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  irA(vinculo:string){
    console.log(vinculo);

    this.route.navigateByUrl(vinculo);
  }

  close(vinculo:string){
    console.log(vinculo);
    this.storage.set('contrasena',"");
    this.storage.set('idUsuario',"");
    this.route.navigateByUrl(vinculo);
  }
}
