import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loginStatus.next(this.isLoggedIn());
   }
  
  save(token: string){
    sessionStorage.setItem('token',token);
    this.loginStatus.next(true);

  }

  get(): string{
    return sessionStorage.getItem('token') || '';
  }

  isLoggedIn() : boolean{
    return !!sessionStorage.getItem('token');
  }

  remove(): void{
    this.loginStatus.next(false);
    return sessionStorage.removeItem('token');

  }
}
