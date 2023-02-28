import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup
  message='';
  submitted = false
  loginUser = new Login();
  constructor(private formBuilder: FormBuilder, private login: LoginService, private _router: Router, private http: HttpClient) {

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],

      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }
    if (this.submitted) {
      this.http.get<any>("http://localhost:3000/userlogin")
        .subscribe(data => {
          const user = data.find((a: any) => {
            console.log(a.username)
            console.log(a.password)
            console.log("---------------------------");
            console.log(this.loginForm.value.username)
            console.log(this.loginForm.value.password)
            return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password

          });
          if (user) {
            this.message="login sucess";
            this._router.navigate(['home']);
            this.loginForm.reset();

          }
          else {
            this.message="User not Found";
          }
        })
    }
  }

}
