import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  data:any[] = [];

  constructor(private newsService:NewsService,public route:Router) {
   
   }
 

   ngOnInit() {
     this.mostrarNoticias();
  }
  
  mostrarNoticias(){
    
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

  doRefresh(event) {
    console.log('Begin async operation');
    this.mostrarNoticias();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
 

}
