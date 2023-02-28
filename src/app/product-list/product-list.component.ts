import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent   {

  // products: any[] = [];

  // products$: Observable<Array<any>>;

  // constructor (private ProductApi: ProductApiService){}

  // ngOnInit() {
  //    this.products=this.ProductApi.getProduct();
  // }

  constructor(private productApi:ProductApiService) { }

  apidata:any= [];


ngOnInit()  {
  this.productApi.getProduct().subscribe((data)=>{
    console.log(data);
    this.apidata=data;
  });
}

}
