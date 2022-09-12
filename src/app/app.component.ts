import { Component } from '@angular/core';

//!it is a very important file  ,how the module work is defined here
@Component({
  selector: 'app-root', //element selector
  templateUrl: './app.component.html', //which template u want to use 
  styleUrls: ['./app.component.css'] //from which css file u want to use
})
export class AppComponent {
  title = 'to-do-list';
  constructor(){
    // setTimeout(() => {
    //  this.title = "title has been changed";
    // }, 2000);
  }
  
}
