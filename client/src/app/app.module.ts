import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ExplainationComponent } from './explaination/explaination.component';
import { BookexplainationsComponent } from './bookexplainations/bookexplainations.component';
import { BookcreatorComponent } from './bookcreator/bookcreator.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { PopularbooksComponent } from './popularbooks/popularbooks.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BookService } from './book.service';
import { MessageService } from './message.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { SharedService } from './shared.service';
import { ErrorHandlingService } from './errorhandling.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ExplainationComponent,
    BookexplainationsComponent,
    BookcreatorComponent,
    MainComponent,
    PopularbooksComponent,
    AllbooksComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService,
  MessageService,
  SharedService,
  ErrorHandlingService,
  AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
