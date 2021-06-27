import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./component/home/home.component"
import { SearchresultComponent } from './component/searchresult/searchresult.component';
import { MoviedetailsComponent } from './component/moviedetails/moviedetails.component';

const routes: Routes = [
  {path : "home" , component : HomeComponent},
  {path : "" , redirectTo : "home" , pathMatch : "full" },
  {path : "searchresult" , component : SearchresultComponent},
  {path : "moviedetails/:original_title/:imagelink" , component : MoviedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
