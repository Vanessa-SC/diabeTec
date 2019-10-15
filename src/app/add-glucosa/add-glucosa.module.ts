import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddGlucosaPage } from './add-glucosa.page';

const routes: Routes = [
  {
    path: '',
    component: AddGlucosaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddGlucosaPage]
})
export class AddGlucosaPageModule {}
