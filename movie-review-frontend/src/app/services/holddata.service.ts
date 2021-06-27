import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolddataService {

  constructor() { }

  searchquery  = new BehaviorSubject("");
  searchqueryobservable = this.searchquery.asObservable();


  image = new BehaviorSubject("");
  imageobservable = this.image.asObservable();

  setmethod(moviename : any){
    console.log("set method called with " , moviename);
    this.searchquery.next(moviename)


  }

  setimage(image : any){
    console.log("set image called" , image);
    this.image.next(image);

  }

}
