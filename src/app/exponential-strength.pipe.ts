import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'exponentialStrength'})

export class ExponentialStrengthPipe implements PipeTransform {
   transform(value: number, exponent?: number): number {
     // @ts-ignore
     if ( exponent ) {
       return Math.pow(value, exponent);
     }
     else {
       return Math.pow(value, 1);
     }
 }
}
