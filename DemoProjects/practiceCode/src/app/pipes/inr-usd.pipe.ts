import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrUsd'
})
export class InrUsdPipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown {
    console.log(args,"@@ args ?")
    const [x ] = args;
    return value*20*x;
  }

}
