import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  @Input() countries;
  @Input() foundCountries;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {}
}
