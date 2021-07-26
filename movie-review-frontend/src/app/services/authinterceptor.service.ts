import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor{

  intercept(req : HttpRequest<any> , next : HttpHandler){

    const token = localStorage.getItem("token")

    if(token){
      console.log("auth added")
      const cloned = req.clone({
        headers : req.headers.set("Authorization" , "Bearer " + token)
      })

      return next.handle(cloned)
    }
    else {
      return next.handle(req)
    }








  }

  constructor() { }
}
