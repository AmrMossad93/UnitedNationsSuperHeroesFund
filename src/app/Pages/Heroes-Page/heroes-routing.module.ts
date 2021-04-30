import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroesResolver} from '../../Resolvers/heroes.resolver';

const routes: Routes = [
  {path: '', component: HeroesComponent, resolve: {list: HeroesResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
