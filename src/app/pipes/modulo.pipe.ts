import {Pipe , PipeTransform} from '@angular/core';

@Pipe({ name: 'Modulo' })

export class ModuloPipe implements PipeTransform {
  transform(value: number , modulo?: number ): number {

    if (modulo)
    {
      return value % modulo;
    }
    else
    {
      return value % 1;
    }
  }
}
