import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: () => import('./Pages/Home-Page/home.module').then(c => c.HomeModule)
  },
  {
    path: 'heroes-page',
    loadChildren: () => import('./Pages/Heroes-Page/heroes.module').then(c => c.HeroesModule)
  },
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
