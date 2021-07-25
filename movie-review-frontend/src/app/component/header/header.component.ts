import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HolddataService } from 'src/app/services/holddata.service';
import { LoginComponent } from '../login/login.component';
import { LogoutmessageComponent } from '../logoutmessage/logoutmessage.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginflag : boolean = this.auth.isjwtavailable()

  tempsubs : Subscription
  

  onloginclick(){
    this.dialog.open(LoginComponent , {
      height : "auto",
      width : "30%"

    })
      
  }

  onlogoutclick(){
    this.dialog.open(LogoutmessageComponent , { width : "30%" , height : "auto"})
    
  }

  constructor( private dialog : MatDialog , private auth : AuthService , private holddata : HolddataService) { }

  ngOnInit(): void {

    

    

    

    

   
  }

}
