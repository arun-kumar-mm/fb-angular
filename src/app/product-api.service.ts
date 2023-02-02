import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Productuser } from './productuser';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  // private shipping = new BehaviorSubject<[any]>([''] as any);
  //  public shipping$ = this.shipping.asObservable();

  //productUrl="https://dummyjson.com/products";
  constructor(private http:HttpClient) { }


  // getProduct() {
  //    this.http.get('/assets/products.json') .pipe(map((res: any) => (res = res))).subscribe((sub: any) => {
  //     sub = sub;
  //      this.shipping.next([sub]);

  //   });

  getProduct():Observable<Productuser[]> {
    return this.http.get<Productuser[]>('/assets/products.json');
  }


  // getProductId(id:number) :Observable<Productuser[]> {
  //   return this.http.get<Productuser[]>('/assets/products_detail.json');
  // }

  getId(id:any){
    return this.http.get('https://dummyjson.com/products/'+id);
  }



  public SubmitUser(user : User): Observable<any>{
    return this.http.post<any>("http://localhost:3000/posts",user)

  }


}


