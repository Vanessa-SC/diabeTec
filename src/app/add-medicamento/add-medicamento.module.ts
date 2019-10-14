import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddMedicamentoPage } from './add-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: AddMedicamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddMedicamentoPage]
})
export class AddMedicamentoPageModule {}
