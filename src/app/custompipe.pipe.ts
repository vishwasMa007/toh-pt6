import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    if(value !== undefined){
    return value+" hello"+ args[0]+args[1];
    }
  }

}
