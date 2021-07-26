import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { HttperrorhandlingService } from 'src/app/services/httperrorhandling.service';
import { Subscription } from 'rxjs';
import { HolddataService } from 'src/app/services/holddata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginmessageComponent } from '../loginmessage/loginmessage.component';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  review : any ;

  rating : any ;

  reviewform : FormGroup

  original_title : any ;

  movie_details : {[index : string] : any} ;

  imagelink : any

  subscription : Subscription;

  formerrors : {[index : string] : any} = {
    "review" : ""
  }

  formerrorsdefault : {[index : string] : any} = {
    "review" : {
      "required" : "review cant be empty !"

    }
  }

  onvaluechanged(){
    for (const field in this.formerrorsdefault){
        this.formerrors[field] = ""
        let formfield = this.reviewform.get(field)
        if (formfield?.hasError){
          for (const error in formfield.errors){
            this.formerrors[field] = this.formerrorsdefault[field][error]
          }
        }
    }

  }

  submitclicked(){
    this.review = this.reviewform.get("review")?.value
    console.log("review" , this.review , this.rating , this.original_title)
    if(localStorage.getItem("token") != null){
      this.movieservice.addcomment(this.movie_details._id , this.original_title ,  this.rating , this.review)
      .subscribe((res) => {
        console.log(res.message , res.doc )
        location.reload()
      })

    }
    else{

      this.dialog.open(LoginComponent , {width : "30%" , height : "auto"  })

    }

  }

  addtofavouriteclick(){
    if(localStorage.getItem("token") != null){
      this.movieservice.addfavourite(this.movie_details._id)
      .subscribe((res) => {
        this.dialog.open(LoginmessageComponent , {data : {messagefromserver : res.message}})

      })
    }
    else{
      this.dialog.open(LoginComponent , {width : "30%" , height : "auto"  })

    }
  }

  sliderchanged(event :any ){
    this.rating = event.value

  }

  constructor(private activatedroute : ActivatedRoute , private movieservice : MoviesService ,
     private errorhandling : HttperrorhandlingService , private holddata : HolddataService ,
     private fb : FormBuilder , public dialog : MatDialog) { }

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

    this.reviewform = this.fb.group(
      {"review" : ["" , [Validators.required]]}
        
    )

    this.reviewform.valueChanges
    .subscribe(() => this.onvaluechanged())

    




  }

}
