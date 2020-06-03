import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { VisitService } from './services/visit.service';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';

import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { SearchPipe } from './pipes/search.pipe';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SearchPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, UserService, VisitService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
