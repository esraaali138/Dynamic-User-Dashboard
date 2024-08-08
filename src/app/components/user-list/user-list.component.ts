import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../service/users/user.service';
import { User } from '../../models/user.interface';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../service/errors/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
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
  loading = true;
  filteredUsers = false;
  errorMessage = '';
  constructor(
    private userService: UserService,
    private router: Router,
    private errorService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.userService.getUsers(this.currentPage).subscribe(
      (res) => {
        this.users = res.data;
        this.total_pages = res.total_pages;
        this.loading = false;
        this.filteredUsers =
          this.users.filter((user) =>
            user.id.toString().includes(this.searchId)
          ).length === 0;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.errorMessage = this.errorService.handleError(error);
      }
    );
  }
  goToUserDetails(id: number) {
    this.router.navigateByUrl(`/user-details/${id}`);
  }

  clickToNext() {
    if (this.currentPage < this.total_pages) {
      this.currentPage++;
      this.fetchData();
    }
  }
  clickToPrev() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchData();
    }
  }
}
