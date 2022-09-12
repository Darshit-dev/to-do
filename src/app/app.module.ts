//?It is an entry point for the application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';

@NgModule({
  declarations: [
    //all the components are declared here
    AppComponent,
    TodosComponent
  ],
  imports: [
    //all the external modules are imported here
    BrowserModule,//used for DOM manipulation
    AppRoutingModule // used for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
