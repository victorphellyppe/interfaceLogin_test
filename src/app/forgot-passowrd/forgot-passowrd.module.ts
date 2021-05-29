import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassowrdPageRoutingModule } from './forgot-passowrd-routing.module';

import { ForgotPassowrdPage } from './forgot-passowrd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassowrdPageRoutingModule
  ],
  declarations: [ForgotPassowrdPage]
})
export class ForgotPassowrdPageModule {}
