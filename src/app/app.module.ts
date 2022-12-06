import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
const myRoute:Routes=[
  {
    path:"",
    component:AddcourseComponent
  },
  {
    path:"/viewcourse",
    component:ViewcourseComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
