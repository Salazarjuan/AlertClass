import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {


  @Input() inputMessage:string;

  @Output() outputActor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  RegisterActor(name,country){
    let actor =
      {
        "name": name,
        "country": country,
      }
    this.outputActor.emit(actor)
  }

}
