import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BookexplainationsComponent } from './bookexplainations/bookexplainations.component';
import { MainComponent } from './main/main.component';
import { BookcreatorComponent } from './bookcreator/bookcreator.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'book/:id/:page', component: BookexplainationsComponent },
  { path: 'addbook', component: BookcreatorComponent },
  { path: 'allbooks', component: AllbooksComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
