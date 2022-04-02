import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  showPassword: boolean = false;

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private api: LoginService) {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirm_password : ['',[Validators.required,Validators.minLength(8)]]
    },{
       validators:  [this.matchPasswords.bind(this)]
    }
    );

   }

  ngOnInit(): void {
  }

  toggleShowPassword(): void{
    this.showPassword = !this.showPassword;
  }

  sendData(){
    if(this.form.valid){
      const {password, confirm_password} = this.form.getRawValue()
      console.log('Enviar datos',password,confirm_password);
    } else{
      console.log('Error, faltan datos',this.form);
    }
  }
  
  postData(){
    if(this.form.valid){
      console.log(this.form);
    this.api.sendData(this.form);
    }else{
      console.log('Error, no se enviaron los datos',this.form);
    }

  }

  matchPasswords() {
    if(!this.form) return;
    const {password, confirm_password} = this.form.getRawValue()
    if( password == confirm_password){
      return null;
    }else{
      return {passwordMismatch:true}
    }
  }

}
