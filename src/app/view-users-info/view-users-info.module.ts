import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewUsersInfoPage } from './view-users-info.page';

const routes: Routes = [
  {
    path: '',
    component: ViewUsersInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewUsersInfoPage]
})
export class ViewUsersInfoPageModule {}
