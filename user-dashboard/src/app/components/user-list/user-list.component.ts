import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: User[] = []
  constructor(private userService : UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res.data
    })
  }
}
