import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {



  productData:any=[];
  constructor(private activeroute: ActivatedRoute,private _router:Router,private productApi:ProductApiService) { }




id:number =0;
// productDetail:any=[];

// ngOnInit() :void {
//   this.productApi.getProductId(this.id).subscribe((data)=>{
//     console.log(data);
//     this.productDetail=data;
//   });
// }

ngOnInit() {
  this.id=(this.activeroute.snapshot.params['id']);
  this.getId();
}

getId(){
    this.productApi.getId(this.id).subscribe(data=>{
      console.log(data);
      this.productData=data;
    })
}

}
