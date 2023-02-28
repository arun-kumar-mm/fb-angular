import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Productuser } from './productuser';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }
  //get products list
  getProduct(): Observable<Productuser[]> {
    return this.http.get<Productuser[]>('/assets/products_api.json');
  }
//get products list by ID
  getId(id: any) {
    return this.http.get('https://dummyjson.com/products/' + id);
  }
  // post data
  public SubmitUser(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:3000/posts", user)

  }


}


