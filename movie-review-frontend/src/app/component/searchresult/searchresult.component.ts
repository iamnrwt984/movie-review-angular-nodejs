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

  result = [
    {
        "id": "tt3530896",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMTgyNDk3NDEwOV5BMl5BanBnXkFtZTgwODY5MTg5NzE@._V1_Ratio0.7273_AL_.jpg",
        "title": "ToY",
        "description": "(2016)"
    },
    {
        "id": "tt0080075",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BYzg5ZDU2NjYtMjYwMS00OTJlLTlmZDktYTg1ZTAzYjkwMjRhXkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_Ratio0.7273_AL_.jpg",
        "title": "Madness",
        "description": "(1980) aka \"Toy\""
    },
    {
        "id": "tt14113274",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BOWExNGNmNjAtMTFmZC00YzVhLWI2OTQtNTFmNGU3MTQ1ZGRhXkEyXkFqcGdeQXVyMTI4OTY1ODcw._V1_Ratio1.7727_AL_.jpg",
        "title": "Toy",
        "description": "(2021) (Short)"
    },
    {
        "id": "tt1979376",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_Ratio0.7273_AL_.jpg",
        "title": "Toy Story 4",
        "description": "(2019)"
    },
    {
        "id": "tt0114709",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_Ratio0.7273_AL_.jpg",
        "title": "Toy Story",
        "description": "(1995)"
    },
    {
        "id": "tt0435761",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_Ratio0.7273_AL_.jpg",
        "title": "Toy Story 3",
        "description": "(2010)"
    },
    {
        "id": "tt0120363",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_Ratio0.7273_AL_.jpg",
        "title": "Toy Story 2",
        "description": "(1999)"
    },
    {
        "id": "tt0437745",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BYzcyMjQzYjQtNTU2My00ZjQ1LWI4NGEtODVjM2UwYjU5NDAzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg",
        "title": "Robot Chicken",
        "description": "(2005) (TV Series) aka \"Attatoy\""
    },
    {
        "id": "tt0452046",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_Ratio0.7273_AL_.jpg",
        "title": "Criminal Minds",
        "description": "(2005) (TV Series)"
    },
    {
        "id": "tt0105629",
        "resultType": "Title",
        "image": "https://imdb-api.com/images/original/MV5BZWFmMTllM2EtZTNlOC00NGY3LTg1YWItZGIzOTU3Mzk3YmNkL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg",
        "title": "Toys",
        "description": "(1992)"
    }
]


  constructor( private holddata : HolddataService , private movieservice : MoviesService , private handleerror : HttperrorhandlingService) { }

  ngOnInit(): void {
    this.subscription = this.holddata.searchqueryobservable.subscribe((value) => {
      this.searchquery = value ;
      console.log("subscription called with " , this.searchquery)
      /* this.movieservice.getmoviefromapi(this.searchquery)
      .subscribe((res) => { console.log("response from api" , res.results)
                             this.result = res.results} ,
      (error) => { this.handleerror.handleError(error)}) 
      */

    })

   


  }

}
