import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string =  '';
  password:string ='';
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  });
  
  constructor(
    private router: Router,
    //private snackBar: MatSnackBar
    private fb: FormBuilder,
    ) {}

  public login() {
    this.router.navigate(['/home']);
  }
}
