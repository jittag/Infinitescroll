import { Component } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import {FilterPipe} from './pipes'
import { Http, Response } from '@angular/http';
import { InfiniteScrollService } from './infinite-scroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  directives: [ InfiniteScroll ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;
  names:any;
  data:any;

  sum = 10;
  throttle = 300;
  scrollDistance = 1;

  constructor(private http: Http, private service: InfiniteScrollService){
    this.title = "User search";

    //https://uinames.com/api/?amount=25
      this.data = service.getUsers().subscribe(
        data => {
          this.names = data;
          console.log("DATA HERE: ", this.names);
        }
    );      
     console.log(this.names);
    );

  }

addItem(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.names.push("user"+i);
    }
  }

    onScrollDown () {
        console.log('scrolled down!!')
        const start = this.sum;
        this.sum += 5;
        this.addItem(start, this.sum);
    }
 
    onScrollUp () {
      console.log('scrolled up!!')
    }

    ngOnInit() {
      
    }

    }
