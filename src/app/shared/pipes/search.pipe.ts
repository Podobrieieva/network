import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users, value): any {
    return users &&
    users.filter(user => {
        return user.name.includes(value) || user.surname.includes(value);
    });
  }
}
