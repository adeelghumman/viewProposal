import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'picInitials'
})
export class PicInitialsPipe implements PipeTransform {

  transform(name: any): string {
    if (name) {
      const fullName = name.split(' ');
      let initials = '';
      if (fullName.length > 1) {
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      } else if (fullName.length < 2) {
        initials = fullName.shift().charAt(0);
      }
      initials = initials.toUpperCase();
      return initials;
    }

    return '';
  }
}
