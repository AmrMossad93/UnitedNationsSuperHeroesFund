import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HeroesService} from '../Services/heroes.service';
import {IHero} from '../Models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesResolver implements Resolve<IHero[]> {
  constructor(private heroesService: HeroesService) {
  }

  resolve(): Observable<IHero[]> {
    return this.heroesService.getHeroList();
  }
}
