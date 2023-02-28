import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  datas: any;

  prodbill = new User();
  prodbill1 = new User();
  nameuser: any;
  message = '';
  prodbills: any = [];

  constructor(private productApi: ProductApiService, private activeroute: ActivatedRoute, private _router: Router) { }

  addform = new FormGroup({

    name: new FormControl('', [Validators.required]),
    Phone_Number: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    descrption: new FormControl('', [Validators.required]),
    ProductId: new FormControl('', [Validators.required]),

  });

  submit() {

    console.log("Submit successful");
    this.nameuser = this.addform.value;
    this.prodbill.name = this.nameuser.name;
    this.prodbill.email = this.nameuser.email;
    this.prodbill.Phone_Number = this.nameuser.Phone_Number;
    this.prodbill.ProductId = this.datas;
    this.save();
  }

  save() {​                                   //Calls the REST API throgh the services
    this.productApi.SubmitUser(this.prodbill).subscribe(
      data => {
        console.log(data);
        this.prodbills = data;

      }
    )
  }

  ngOnInit(): void {
    this.datas = (this.activeroute.snapshot.params['id']);
    console.log('print details by id');
    console.log(this.datas);


  }
}
