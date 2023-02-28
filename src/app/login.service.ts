import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  //signup
  public loginUser(signup: Login): Observable<any> {
    return this.http.post<any>("http://localhost:3000/userlogin",signup)

  }
}
