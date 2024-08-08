import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/users/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.interface';
import { ErrorHandlerService } from '../../service/errors/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;
  loading = true;
  errorMessage = '';
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private errorService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (userId !== null) {
      const userIdNumber = Number(userId);
      this.userService.getUserById(userIdNumber).subscribe(
        (res) => {
          this.user = res.data;
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.errorMessage = this.errorService.handleError(error);
        }
      );
    }
  }
  goToUsers() {
    this.router.navigateByUrl('/users');
  }
}
