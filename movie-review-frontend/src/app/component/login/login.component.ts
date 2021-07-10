import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttperrorhandlingService } from 'src/app/services/httperrorhandling.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  loginFormData : string

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
    console.log("data : " , this.loginFormData)
    this.auth.login(this.loginFormData)
    .subscribe((res) => {
      console.log("res from server" , res)
    } , (err) => {this.errhandling.handleError(err)})

  }

  onsignup(){
    this.loginFormData = this.loginForm.value
    this.auth.signup(this.loginFormData)
    .subscribe((res) => {
      console.log("res from server" , res) 
    } , (err) => {this.errhandling.handleError(err)})
  }

  constructor( private fb : FormBuilder , private auth : AuthService , private errhandling : HttperrorhandlingService) { }

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
