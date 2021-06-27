import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  loginFormData : any

  formerrors : {[index : string] : any} = {
    "email" : "" ,
    "password" : ""
  }
 
  formerrorsdefault : {[index : string] : any} = {
    "email" : {
      "required"  : "email is required"
    } ,
    "password" : {
      "required" : "password is required"
    }
 
  }

  onvaluechanged(){

    for ( const field in this.formerrorsdefault){
 
      const formfield = this.loginForm.get(field);
    
      if (formfield?.hasError){
       for (const errors in formfield.errors){
         this.formerrors[field] = this.formerrorsdefault[field][errors] ;
      
       }
        
      }
      
    }
 
  }

  onlogin(){
    console.log("data : " , this.loginForm.value)
    this.loginFormData = this.loginForm.value
    console.log("data : " , this.loginFormData.value)
  }

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        "email" : ["" , Validators.required] ,
        "password" : ["" , Validators.required]
      
      }
    )

    this.loginForm.valueChanges
    .subscribe(() => {this.onvaluechanged()})
  }

}
