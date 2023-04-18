import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup ;
  flag :boolean = false;
  // constructor(private authService : AuthService, private router : Router) { }
  constructor( private router : Router,
               private authentication : AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required,Validators.email]),
      password : new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)])
    })
  }

  get f(){
    return this.loginForm.controls
  }
  

  submittedlogin() {
    let username = this.loginForm.get('username')!.value;
    let password = this.loginForm.get('password')!.value;
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    if (this.authentication.isAuthentication()) {
      this.router.navigate(['list'])
    } else {
     alert('failed.....!!!')
    }
  }
}





