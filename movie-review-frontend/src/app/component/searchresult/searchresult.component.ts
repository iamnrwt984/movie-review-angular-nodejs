import { Component, OnInit } from '@angular/core';
import { MoviesService } from "src/app/services/movies.service"
import { HolddataService } from "src/app/services/holddata.service"
import { HttperrorhandlingService } from "src/app/services/httperrorhandling.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  subscription : Subscription

  searchquery : any ;

  result : any ;

  


  constructor( private holddata : HolddataService , private movieservice : MoviesService , private handleerror : HttperrorhandlingService) { }

  ngOnInit(): void {
    this.subscription = this.holddata.searchqueryobservable.subscribe((value) => {
      this.searchquery = value ;
      console.log("subscription called with " , this.searchquery)
      this.movieservice.getmoviefromapi(this.searchquery)
      .subscribe((res) => { console.log("response from api" , res.results)
                             this.result = res.results} ,
      (error) => { this.handleerror.handleError(error)}) 
      

    })

   


  }

}
