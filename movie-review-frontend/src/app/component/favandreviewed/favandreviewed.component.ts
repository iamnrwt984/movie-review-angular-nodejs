import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HolddataService } from 'src/app/services/holddata.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favandreviewed',
  templateUrl: './favandreviewed.component.html',
  styleUrls: ['./favandreviewed.component.scss']
})
export class FavandreviewedComponent implements OnInit {

  required_data : any 

  subscription : Subscription

  image : any = "../../../assets/images/default.jpg"



  constructor(private http : HttpClient , private route : ActivatedRoute , private movieservice : MoviesService , private holddata : HolddataService) { }

  ngOnInit(): void {

    this.holddata.requireddataobservable.subscribe(
      (result) => {
        this.required_data = result
        console.log("result" , this.required_data)
      }
    )

    this.route.paramMap.subscribe((params) => {
      const page = params.get("page")
      if (page == "fav"){
        this.movieservice.getuserdata().subscribe(
          (res) => {
            console.log("test" , res) 
            let data = res.fav
            this.holddata.setrequireddata(data)
            
          }
        )

      }

      else {
        this.movieservice.getuserdata().subscribe(
          (res) => {
            let data = res.reviewed
            this.holddata.setrequireddata(data)
          }
        )


      }
      console.log("data" , this.required_data)
      

      
      
      
    })

    
  }

}
