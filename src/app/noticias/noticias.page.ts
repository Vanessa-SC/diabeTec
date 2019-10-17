import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  data:any[] = [];

  constructor(private menu: MenuController,private newsService:NewsService,public route:Router) {
   
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
 

  ngOnInit() {
    this.newsService
      .getData('everything?q=diabetes&language=es&sortBy=publishedAt')
      .subscribe(data=> {
        console.log(data);
        this.data = data['articles'];
      },
      (error) =>{
        console.error(error);
      })
  }
 

}
