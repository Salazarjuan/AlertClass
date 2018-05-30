import { Component } from '@angular/core';
import {selector} from "rxjs/operator/publish";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app class Alert Logic';
  disableVar = false;
  hiddenVar = false;
  myClass1Name = 'class1';
  myClass2Name = 'class2';


  optionMsg: string;
  checkMsg: string;

  selectionMSG: string;
  colorSelected = 'classFirst';

  mouseOver: boolean;
  clickCounter: number;

  constructor(){
    this.optionMsg = 'red';
    this.checkMsg = 'not checked';
    this.colorSelected = 'classFirst';
    this.selectionMSG = 'The first class print text in purple';
    this.clickCounter = 0;
    this.mouseOver = false;
  }

  clickme(){
    console.log("Hi mose event!");
  }

  handleCheck(state:boolean){
    this.checkMsg = (state) ? 'checked' : 'not checked'
  }

  handleSelect(value){
    this.optionMsg = value;
  }

  activitySelect(value){
    if(value == 'first'){
      this.colorSelected = 'classFirst';
      this.selectionMSG = 'The first class print text in purple';
    }else if(value == 'second'){
      this.colorSelected = 'classSecond';
      this.selectionMSG = 'The second class print text in orange';
    }else if(value == 'third'){
      this.colorSelected = 'classThird';
      this.selectionMSG = 'The third class print text in brown';
    }
  }

  counterSum(value){
    this.clickCounter += 1;
  }

  isOver(value:boolean){
    this.mouseOver = value;
  }

}
