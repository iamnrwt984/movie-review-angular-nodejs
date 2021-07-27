import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './component/home/home.component';
import { SearchresultComponent } from './component/searchresult/searchresult.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MoviedetailsComponent } from './component/moviedetails/moviedetails.component';
import { LoginComponent } from './component/login/login.component';
import { LoginmessageComponent } from './component/loginmessage/loginmessage.component';
import { LogoutmessageComponent } from './component/logoutmessage/logoutmessage.component';
import { AuthinterceptorService } from './services/authinterceptor.service';
import { FavandreviewedComponent } from './component/favandreviewed/favandreviewed.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchresultComponent,
    HeaderComponent,
    FooterComponent,
    MoviedetailsComponent,
    LoginComponent,
    LoginmessageComponent,
    LogoutmessageComponent,
    FavandreviewedComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,  
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,

    

    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : AuthinterceptorService , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
