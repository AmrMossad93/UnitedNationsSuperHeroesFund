import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import {AngularMaterialModule} from '../../DesignModules/angular-material.module';
import {PrimeNgModule} from '../../DesignModules/prime-ng.module';
import { FilterHeroesComponent } from './heroes/filter-heroes/filter-heroes.component';
import {FormsModule} from '@angular/forms';
import { AddEditHeroComponent } from './heroes/add-edit-hero/add-edit-hero.component';
import { DeleteHeroComponent } from './heroes/delete-hero/delete-hero.component';
import {CustomFormsModule} from "ngx-custom-validators";


@NgModule({
  declarations: [
    HeroesComponent,
    FilterHeroesComponent,
    AddEditHeroComponent,
    DeleteHeroComponent
  ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        AngularMaterialModule,
        PrimeNgModule,
        FormsModule,
        CustomFormsModule
    ]
})
export class HeroesModule { }
