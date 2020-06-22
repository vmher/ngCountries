import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  getCountries(url) {
    return this.http.get(url);
  }

  lazyCountries(countries) {
    console.log(countries);
  }

  search(countries, searchName) {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1
    );
  }

  sort(countries) {
    return countries.sort((a, b) => b.votes - a.votes);
  }

  vote(countries, countryName, direction) {
    let country = countries.find((country) => country.name === countryName);
    if (direction === 'up') {
      country.votes += Number(country.votes != 30);
    } else {
      country.votes -= Number(country.votes != 0);
    }
  }

  constructor(private http: HttpClient) {}
}
