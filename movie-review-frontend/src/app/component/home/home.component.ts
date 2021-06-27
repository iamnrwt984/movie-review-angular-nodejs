import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder  , FormGroup, Validators } from "@angular/forms" ;
import { BehaviorSubject } from 'rxjs';

import { MoviesService } from "src/app/services/movies.service"
import { HolddataService } from "src/app/services/holddata.service"
import { HttperrorhandlingService } from "src/app/services/httperrorhandling.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


 searchForm : FormGroup ;

 search : string ;

 resultsfromapi : any ;

 formerrors : {[index : string] : any} = {
   "searchfield" : ""
 }

 formerrorsdefault : {[index : string] : any} = {
   "searchfield" : {
     "required"  : "movie name is required"
   }

 }



 onvaluechanged(){

   for ( const field in this.formerrorsdefault){

     const formfield = this.searchForm.get(field);
     console.log(formfield)
     if (formfield?.hasError){
      for (const errors in formfield.errors){
        this.formerrors[field] = this.formerrorsdefault[field][errors] ;
        console.log(this.formerrors[field])
      }
       
     }
     
   }

 }

 onsearchclick(){
  console.log(this.searchForm.value)
  this.search = this.searchForm.value.searchfield
  console.log("search" , this.search)
  this.holddata.setmethod(this.search)

  
  

}

 
  constructor(private fb : FormBuilder  , private holddata : HolddataService ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group(
      {
        "searchfield" : ["" , Validators.required]
      
      }
    )

    

    this.searchForm.valueChanges
    .subscribe(() => {this.onvaluechanged()})

    
    
  }

  

}
