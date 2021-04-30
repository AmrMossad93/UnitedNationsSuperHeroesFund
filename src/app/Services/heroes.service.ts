import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHero} from '../Models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient) {
  }

  getHeroList(): Observable<IHero[]> {
    return this.httpClient.get<IHero[]>('assets/JSON-Files/heroes.json');
  }
}
