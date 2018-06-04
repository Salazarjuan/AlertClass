import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  message = 'din din din di ding di ding, di di ding di ding ding di di'
  constructor() { }

  ngOnInit() {
  }

  ListenChild(event){
    console.log(event, "listening the boy")
  }

}
