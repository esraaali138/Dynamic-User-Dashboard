import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;
  loading = true
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (userId !== null) {
      const userIdNumber = Number(userId);
      this.userService.getUserById(userIdNumber).subscribe((res) => {
        this.user = res.data;
        this.loading = false
      });
    }
  }
  goToUsers() {
    this.router.navigateByUrl('/users');
  }
}
