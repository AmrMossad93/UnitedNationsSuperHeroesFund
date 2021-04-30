import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import {AngularMaterialModule} from '../DesignModules/angular-material.module';



@NgModule({
  declarations: [
    JumbotronComponent
  ],
  exports: [
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class WidgetsModule { }
