import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  name(){
    return "We are using function for the Angular"
  }
  getname(){
    return this.name
  }
  obj={
    name:'peter',
    age:25
  }
  arr=['Ajeet','Kumar']
  a=10;
  b=20;
  siteUrl=window.location.href
}
