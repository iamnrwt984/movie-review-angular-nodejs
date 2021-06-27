import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { HttperrorhandlingService } from 'src/app/services/httperrorhandling.service';
import { Subscription } from 'rxjs';
import { HolddataService } from 'src/app/services/holddata.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  original_title : any ;

  movie_details : {[index : string] : any} ;

  imagelink : any

  subscription : Subscription;

  constructor(private activatedroute : ActivatedRoute , private movieservice : MoviesService , private errorhandling : HttperrorhandlingService , private holddata : HolddataService) { }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(params => {
      console.log("params : " , params)
      this.original_title = params.get("original_title")
      this.imagelink = params.get("imagelink")
      this.movieservice.getmoviedetails(this.original_title)
      .subscribe((result) => {console.log("result : " , result) ;
       this.movie_details = result.founded ;
       console.log("moviedet : " , this.movie_details); } 
  
       , 
      (err) => {this.errorhandling.handleError(err) }
      
      )
    

    })


  }

}
