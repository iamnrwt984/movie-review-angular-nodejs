import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  onloginclick(){
    this.dialog.open(LoginComponent)
      
  }

  constructor( private dialog : MatDialog) { }

  ngOnInit(): void {

   
  }

}
