import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}

  countries;

  url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';

  ngOnInit(): void {
    this.countriesService.getCountries(this.url).subscribe(
      (data) => (this.countries = data),
      (err) => console.log(err),
      () => this.countries.map((country) => (country.votes = 0))
    );
    this.countries = JSON.parse(sessionStorage.getItem('countries'));
    this.foundCountries = this.countries;
  }

  foundCountries;

  sort() {
    this.foundCountries = this.countriesService.sort(this.foundCountries);
  }

  countryVoted({ countryName, direction }) {
    this.countriesService.vote(this.countries, countryName, direction);
    this.sort();
    this.updateCountries(this.foundCountries);
    sessionStorage.setItem('countries', JSON.stringify(this.countries));
  }

  updateCountries(foundCountries) {
    this.foundCountries = foundCountries;
    this.sort();
  }
}
