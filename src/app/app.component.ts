import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SessionStorageService } from './services/session-storage.service';

interface Countries {
  name: string;
  capital: string;
  currency: string;
  votes: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Countries';
  searchPlaceholder = 'find country by name..';
  searchName = '';
  url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';
  tempResp: object;
  countries: Array<Countries>;

  constructor(
    private httpService: HttpService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.httpService.getCountries(this.url).subscribe(
      (resp) => (this.tempResp = resp),
      (err) => console.log(err),
      () => this.modifyResp(this.tempResp)
    );
  }

  modifyResp(resp): void {
    if (sessionStorage.getItem('countries')) {
      this.countries = JSON.parse(
        this.sessionStorageService.getFromSessionStorage('countries')
      );
    } else {
      this.countries = resp.map(function (country) {
        country.currency = country.currencies[0].code;
        country.votes = 0;
        delete country.currencies;
        return country;
      });
    }
  }

  lazyLoad() {
    // lazy load countries with quantity parameter
  }

  vote(countryName, direction): void {
    let country = this.countries.find(
      (country) => country.name === countryName
    );
    if (direction === 'up') {
      country.votes += Number(country.votes != 30);
    } else {
      country.votes -= Number(country.votes != 0);
    }
    this.sortCountries();
    this.sessionStorageService.setToSessionStorage(
      'countries',
      JSON.stringify(this.countries)
    );
  }

  sortCountries(): void {
    this.countries = this.countries.sort((a, b) => b.votes - a.votes);
  }
}
