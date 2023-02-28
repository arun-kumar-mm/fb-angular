import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // productList: Product[]=[]

  constructor (){
  }
  ngOnInit() {
  
    //   this.ProductApi.getProduct().subscribe((data)=>{
    //     console.log(data);
    //     // this.Product=data;
    //   })
    // }
  }

 

    // getProductDataApi() {
    //   this.ProductApi.getProduct().subscribe((data)=>{
    //     console.log(data);
    //     this.data=data;
    //   })
    // }
}

