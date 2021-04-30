import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {
  }

  getCountryList(): Observable<any> {
    return this.httpClient.get('assets/JSON-Files/country.json');
  }
}
