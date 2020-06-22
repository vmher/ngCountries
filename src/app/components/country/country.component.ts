import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  @Input() countries;
  @Input() foundCountries;
  @Output() countryVoted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  vote(countryName, direction) {
    this.countryVoted.emit({ countryName, direction });
  }

  ngOnChanges(changes: SimpleChange) {
    this.countries = this.foundCountries;
  }
}
