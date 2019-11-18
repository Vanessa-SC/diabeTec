import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GraficasPage } from './graficas.page';

import { HttpClientModule } from '@angular/common/http';
import { DatosGraficasService } from '../datos-graficas.service';

const routes: Routes = [
  {
    path: '',
    component: GraficasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [DatosGraficasService],
  declarations: [GraficasPage]
})
export class GraficasPageModule {}
