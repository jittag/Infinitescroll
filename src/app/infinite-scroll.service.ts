import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

const BASE_URL = 'https://uinames.com/api/?amount=25';

@Injectable()
export class InfiniteScrollService {
  
  constructor(private http: Http) { }

  getUsers(private http: Http){
  	 //return this.http.get(`${BASE_URL}/api?amount=25`);

  	   return this.http.get(`${BASE_URL}/api?amount=25`).map(
		     (res:Response) => 

		     var data = JSON.parse(res._body);
		      var temp = [];
		      data.forEach(function(element) {
		        console.log(element.name);
		        temp.push(element.name)
		      });
		      return temp;

		     );
  }


}