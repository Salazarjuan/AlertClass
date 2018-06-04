import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fatherMessage:string;

  @Output() fatherAnswer = new EventEmitter();

  constructor() { }

  AnswerToFather(){
    this.fatherAnswer.emit("That\'s what the fox says!")
  }

  ngOnInit() {
  }

}
