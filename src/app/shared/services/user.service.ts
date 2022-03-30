import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private users:User[] = [
  //   { name: 'John Doe', email: 'john.doe@email.com' },
  //   { name: 'Jane Doe', email: 'jane.doe@email.com' }
  // ];

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(url);
    
  }

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(this.users);
  //   }, 1000);
  // });
}