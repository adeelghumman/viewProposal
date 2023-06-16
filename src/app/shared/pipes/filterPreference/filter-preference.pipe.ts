import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'filterPreference',
  pure: false
})
export class FilterPreferencePipe implements PipeTransform {

  constructor(
    private translate: TranslateService
  ){}

  transform(items: any[] | undefined, filter: string): any[] | undefined {
    if(!items || !filter){
      return items;
    }

    let val: any[] = [];
    this.translate.getLangs().forEach(t => {
      let translationDirectory = Object.keys(this.translate.translations);
      translationDirectory.forEach(tt => {
        const translationsRoot = this.translate.translations[tt];
        for(const key in translationsRoot){
          const translatedValue = this.translate.instant(key);
          if(translatedValue.toLowerCase().includes(filter.toLowerCase())){
            if(key.includes('columns')){
              val.push(key.split('columns.')[1]);
            }
          }
        }
      })
    })

    const uniqueValues: string[] = [...new Set(val)];
    let filteredItems = [];
    for(let u of uniqueValues){
      for(let i of items){
        if(i.columnName.includes(u)){
          filteredItems.push(i);
        }
      }
    }
    
    return [...new Set(filteredItems)];
  }

}
