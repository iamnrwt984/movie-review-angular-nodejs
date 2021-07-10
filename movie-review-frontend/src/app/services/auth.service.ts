import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface loginresponse{
  message : string ,
  token : string

}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }

  login(user : any){
    return this.http.post<loginresponse>("http://localhost:3000/users/login" , {email : user.email , password : user.password})
  }

  signup(user : any){
    return this.http.post<loginresponse>("http://localhost:3000/users/signup" , {email : user.email , password : user.password})
  }
}
