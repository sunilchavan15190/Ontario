import { Component } from '@angular/core';
import * as $ from 'jquery';
import {MinisterService} from './ministerservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MinisterService]
})
export class AppComponent {
  title = 'app';
//  public ministers1;
constructor(private ministerService:MinisterService){


}

  ngOnInit(){
    //  console.log(this.ministerService.getMinisters());
// this.ministers1=this.ministerService.getMinisters();
  }


  togglepane(obj){
    // console.log('hi');
    // $('.tab-pane').removeClass('active');
    console.log(obj);
    $('.tab-pane').removeClass('active');
    console.log('.tabb'+obj);
    $('#tabb'+obj).addClass('active');
  }

  public ministers = [
    {
      "name": "Laura Albanese",
      "img_path": "https://d3v7qf8zyypult.cloudfront.net/profiles/laura-albanese/small/headshot.jpg",
      "department": ["Minister of Citizenship and Immigration"]
    },
    {
      "name": "Michael Coteau",
      "img_path": "https://d3v7qf8zyypult.cloudfront.net/profiles/michael-coteau/small/headshot.jpg",
      "department": ["Minister of Children and Youth Services","Minister of Community and Social Services","Minister Responsible for Anti-Racism"]
    },
    {
      "name": "Dipika Damerla",
      "img_path": "https://d3v7qf8zyypult.cloudfront.net/profiles/dipika-damerla/small/headshot.jpg",
      "department": ["Minister of Seniors Affairs"]
    },
    {
      "name": "Dipika Damerla",
      "img_path": "https://d3v7qf8zyypult.cloudfront.net/profiles/dipika-damerla/small/headshot.jpg",
      "department": ["Minister of Seniors Affairs"]
    }
  ];

}

