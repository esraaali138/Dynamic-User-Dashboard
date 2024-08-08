import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  currentPage: number = 1;
  total_pages: number = 1;
  searchId: string = '';
  animation = false;
  loading = true;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.loading = true;
    this.userService.getUsers(this.currentPage).subscribe((res) => {
      this.users = res.data;
      this.total_pages = res.total_pages;
      this.loading = false;
    });
  }
  goToUserDetails(id: number) {
    this.router.navigateByUrl(`/user-details/${id}`);
  }

  clickToNext() {
    this.animation = false;
    if (this.currentPage < this.total_pages) {
      this.currentPage++;
    }
    this.fetchData();
    this.playAnmation();
  }
  clickToPrev() {
    this.animation = false;
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.fetchData();
    this.playAnmation();
  }

  playAnmation() {
    setTimeout(() => {
      this.animation = true;
    }, 0);
  }
}
