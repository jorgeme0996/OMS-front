import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomInerior'
})
export class NomIneriorPipe implements PipeTransform {

  transform(num: string ): string {

    if( !num ){
      return "N/A";
    }

    return null;
  }

}
