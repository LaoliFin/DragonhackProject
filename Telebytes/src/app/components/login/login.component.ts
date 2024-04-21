import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as firebaseui from 'firebaseui';
import { Subscription } from 'rxjs';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
    )
  {
  }

  login() {
    if (this.loginForm.valid) {
      this.router.navigate(['/']);
    }
    else {
      this.snackBar.open('Please fill in all required fields', 'Close', {
        duration: 5000,
      });}
  }
  }
