import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], field: string, searchText: string): any[] {
    if(!items) {
      return []
    };
    
    if(!searchText){
      return items;
    };


    const myPattern = new RegExp(searchText, 'i');
    return items.filter(it => it[field].substring(0, searchText.length).match(myPattern));
    
    // searchText = searchText.toLowerCase();
    // return items.filter( it => {
    //    it[field].toLowerCase().substring(0, 1).includes(searchText);
    // });
   }
}


