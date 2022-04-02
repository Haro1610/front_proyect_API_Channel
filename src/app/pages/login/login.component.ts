import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Username: string = '';
  //pasword: string = '';
  credentials: any = {} ;

  constructor(private loginService: LoginService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log('Enviar los datos', this.credentials)
    this.loginService.login(this.credentials).then(response => {
      this.authService.save(response.token);
      this.router.navigate(['/users']);

    }).catch(e => {
      console.log('datos incorrectos');

    });
    // const data{
    //   Username = this.Username;
    //   password = this.pasword
    // }
  }

  logout (){
    this.authService.remove();
  }

}
