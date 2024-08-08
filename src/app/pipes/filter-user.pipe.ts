import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.interface';

@Pipe({
  name: 'filterUser',
})
export class FiterUserPipe implements PipeTransform {
  transform(users: User[], searchId: string): User[] {
    if (!searchId) {
      return users;
    }
  if (!users) {
      return [];
    }
    return users.filter((user) => user.id.toString().includes(searchId));
  }
}
