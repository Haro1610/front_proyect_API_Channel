import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  showPassword: boolean = false;

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'name': ['',Validators.required],
      'username': ['',Validators.required],
      'email': ['',Validators.required],
      'password': ['',Validators.required],
      'confirm_password' : ['',Validators.required]
    });

   }

  ngOnInit(): void {
  }

  toggleShowPassword(): void{
    this.showPassword = !this.showPassword;
  }

  

}
