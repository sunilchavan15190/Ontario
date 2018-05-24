import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class MinisterService {

  constructor(private http: Http) { }

  getMinisters1(){
    let apiUrl = 'http://localhost:4200/assets/ministerservice.json';
    return this.http.get(apiUrl)
    .map( (response: Response) => {
       const data = response.json();
       return data;
    });
 }

 private _productURL = './assets/ministerservice.json';    
 getMinisters(): Observable<any> {
        return this.http.get(this._productURL).map((response : Response) => <any> response.json())
        .do(data =>console.log(JSON.stringify(data)));
}





// getMinisters()
// {

//   return 

//   [
//     {
//       "name": "Laura Albanese",
//       "img_path": "https://d3v7qf8zyypult.cloudfront.net/profiles/laura-albanese/small/headshot.jpg",
//       "department": ["Minister of Citizenship and Immigration"]
        
      
//     },
//     {
//       "name": "Michael Coteau",
//       "img_path": "https://d3v7qf8zyypult.cloudfront.net/profiles/michael-coteau/small/headshot.jpg",
//       "department": ["Minister of Children and Youth Services","Minister of Community and Social Services","Minister Responsible for Anti-Racism"]
        
      
//     },
//     {
//       "name": "Dipika Damerla",
//       "img_path": "https://d3v7qf8zyypult.cloudfront.net/profiles/dipika-damerla/small/headshot.jpg",
//       "department": ["Minister of Seniors Affairs"]
        
      
//     }
//   ];


// }

}
