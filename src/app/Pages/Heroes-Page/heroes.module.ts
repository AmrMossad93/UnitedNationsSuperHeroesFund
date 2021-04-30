import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import {AngularMaterialModule} from '../../DesignModules/angular-material.module';
import {PrimeNgModule} from '../../DesignModules/prime-ng.module';


@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    AngularMaterialModule,
    PrimeNgModule
  ]
})
export class HeroesModule { }
