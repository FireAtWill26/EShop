import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if(gender === "female") {
      return "Ms. " + name;
    }
    else{
      return "Mr. " + name;
    }
  }

}
