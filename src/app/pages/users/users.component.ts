import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //private userService;
  users: User[] = [];

  constructor(private userService: UserService, ) { 
    console.log(userService);
    this.userService = userService;
  }

  // constructor(private userService: UserService, private authService: AuthService, private router: Router) { 
  //   console.log(userService);
  //   this.userService = userService;
  // }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response =>{
      console.log('Response: ',response);
      this.users = response;
    })
  }

}
