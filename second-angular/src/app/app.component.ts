import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-angular';

  constructor(private http:HttpClient){
    this.getAll();
  }

  getAll(){
    this.http
    .get('http://localhost:3000/devices')
    .subscribe((result) => console.log(result));
  }
}


