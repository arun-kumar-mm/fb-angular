import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    
registerForm!:FormGroup
title = 'angularvalidate';
submitted=false
loginUser = new Login();
 nameuser: any;
 message='';
 

constructor(private formBuilder:FormBuilder,private login: LoginService, private _router: Router, private http: HttpClient){

}
ngOnInit(){
  this.registerForm = this.formBuilder.group({
    username:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })
}

onSubmit(){
  this.submitted = true
  
  if(this.registerForm.invalid){
    return
  }
  if(this.submitted){
   console.log("Submit successful");
   this.nameuser=this.registerForm.value;
  //  this.loginUser.username=this.nameuser.username;
  //  this.loginUser.password=this.nameuser.password;
 

  this.http.post<any>("http://localhost:3000/userlogin",this.registerForm.value).subscribe(
 data =>{ console.log(data);
  //this.nameuser.reset();
  this._router.navigate(['login']);
  },
  error => {console.log("exception occured");
  this.message="Bad login";


 }
)
 }


 }

}

