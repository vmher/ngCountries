import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface respData {
  currencies: Array<object>;
  name: string;
  capital: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getCountries(): Observable<object> {
    return this.http.get<respData>(environment.countriesUrl);
  }
}
