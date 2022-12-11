import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'chapitreFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: { id: string; chapitre: string; }) => {
      let rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.chapitre.toLocaleLowerCase().includes(args));
      return rVal;
    })
  }

  }
