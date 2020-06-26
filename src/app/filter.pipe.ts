import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: HTMLInputElement): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    // searchText = searchText.toLowerCase();

    return items.filter((item) => item.name.toLowerCase().includes(searchText));
  }
}
