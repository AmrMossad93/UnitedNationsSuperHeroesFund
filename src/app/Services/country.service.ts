import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICountry} from '../Models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {
  }

  getCountryList(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>('assets/JSON-Files/country.json');
  }
}
