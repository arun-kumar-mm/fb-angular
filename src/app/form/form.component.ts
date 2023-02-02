import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user=new User();
  message='';

  constructor(private productApi:ProductApiService ,private _router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  submit(){
    this.productApi.SubmitUser(this.user).subscribe(
      data =>{ console.log("received");
      console.log(data);
     },
    )

  }
}
