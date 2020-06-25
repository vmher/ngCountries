import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  public setToSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public getFromSessionStorage(key: string): string {
    return sessionStorage.getItem(key);
  }
}
