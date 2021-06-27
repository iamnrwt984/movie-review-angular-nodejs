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


}
