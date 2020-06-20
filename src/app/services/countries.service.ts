import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  getCountries(url) {
    return this.http.get(url);
  }

  search(countries, searchName) {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1
    );
  }

  vote() {
    //vote implementation
  }

  constructor(private http: HttpClient) {}
}
