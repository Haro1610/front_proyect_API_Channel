import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  message: any;

  constructor(private http:HttpClient) { }

  getDataAPi(){
    this.http.get('http://localhost:3000/api/users/').subscribe(res =>{
      console.log(res);
      this.message = res;
    })
  }
  sendData(form: FormGroup){
    this.http.post('http://localhost:3000/api/users/singin',form).subscribe(res =>{
      console.log(res);
      
    });
  }

  login(credentials:any): Promise<any>{
    return new Promise((resolve,reject)=>{
      setTimeout(() =>{
        resolve({
          token: 'kdlfjlad12345'

        });
      1000} )
    })
  }
}
