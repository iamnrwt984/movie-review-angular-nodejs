import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loginmessage',
  templateUrl: './loginmessage.component.html',
  styleUrls: ['./loginmessage.component.scss']
})
export class LoginmessageComponent implements OnInit {

  message : any

  constructor(@Inject(MAT_DIALOG_DATA) public data : {messagefromserver : string}) { }

  ngOnInit(): void {

    this.message = this.data.messagefromserver
  }

}
