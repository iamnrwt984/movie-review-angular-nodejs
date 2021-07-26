import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

interface responsefromapi {
  results : any ,
  errorMessage : string
}
interface responsefrommyapi {
  message : String,
  founded : any
}

interface addcomment {
  message : string
  doc : any
}

interface addfavourite {
  message : any
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  getmoviefromapi(searchquery : any){
    console.log("service query : " , searchquery)
    
    return this.http.get<responsefromapi>("https://imdb-api.com/en/API/SearchMovie/k_e4mjayy2/" + searchquery)
    
  }

  getmoviedetails(original_title : any){
    console.log("getmoviesdetails called")

    return this.http.post<responsefrommyapi>("http://localhost:3000/movies/search" , {"original_title" : original_title})

  }

  addcomment(_id : any, original_title : any, rating :any , comment : any){
    return this.http.post<addcomment>("http://localhost:3000/movies/addcomment" , {_id : _id , original_title : original_title , rating : rating , comment : comment} )
  }

  addfavourite(movie_id : any){
    return this.http.post<addfavourite>("http://localhost:3000/users/addfavourite" , {_id : movie_id})
  }

  


}
