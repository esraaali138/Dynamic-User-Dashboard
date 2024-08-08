import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.interface';

@Pipe({
  name: 'fiterUser',
})
export class FiterUserPipe implements PipeTransform {
  transform(users: User[], searchId: string): User[] {
    if (!users || !searchId) {
      return users;
    }
    return users.filter((user) => user.id.toString().includes(searchId));
  }
}
