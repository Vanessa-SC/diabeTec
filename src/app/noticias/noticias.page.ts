import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(public http:HttpService) {
   // this.traerNoticias();
   }
  title:string;
  pubDate:string;
  link:string;
  description:string;
  content:string;

  ngOnInit() {
    
  }
  noticias:any;
  
  // traerNoticias(){
    
  //   this.http.traerNoticias().then(
  //     (inv) => { 
  //      console.log(inv);   
  //      this.noticias = inv;      
  //     },
  //     (error) =>{
  //       console.log("Error"+JSON.stringify(error));
  //       alert("Verifica que cuentes con internet");
  //     }
  //   );

  // }



}
