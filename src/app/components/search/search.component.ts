import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  placeholder = 'find country by name..';

  @Input() countries;
  @Output() updateCountries = new EventEmitter();

  foundCountries;

  constructor(private countriesService: CountriesService) {}

  searchName = '';

  search() {
    this.foundCountries = this.countriesService.search(
      this.countries,
      this.searchName
    );
    this.updateCountries.emit(this.foundCountries);
  }

  ngOnInit(): void {}
}
