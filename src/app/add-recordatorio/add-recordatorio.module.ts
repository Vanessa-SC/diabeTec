import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddRecordatorioPage } from './add-recordatorio.page';

const routes: Routes = [
  {
    path: '',
    component: AddRecordatorioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddRecordatorioPage]
})
export class AddRecordatorioPageModule {}
