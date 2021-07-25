import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logoutmessage',
  templateUrl: './logoutmessage.component.html',
  styleUrls: ['./logoutmessage.component.scss']
})
export class LogoutmessageComponent implements OnInit {

  constructor( private auth : AuthService , public dialog : MatDialogRef<LogoutmessageComponent>) { }

  yesclicked(){
    this.auth.deletejwt()
    this.dialog.close()
    location.reload()

  
  }

  noclicked(){
    this.dialog.close()
  }

  ngOnInit(): void {
  }

}
