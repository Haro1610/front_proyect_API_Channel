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

  }

  get(): string{
    return sessionStorage.getItem('token') || '';
  }

  isLoggedIn() : boolean{
    return !!sessionStorage.getItem('token');
  }

  remove(): void{
    return sessionStorage.removeItem('token');

  }
}
