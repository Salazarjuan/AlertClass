import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  movieId = "";
  movieName = "";
  hide = true;
  name = "";
  cast = Array()

  constructor() {

  }

  AddToMovie(event){
    this.movieId= event.id;
    this.movieName = event.name;
    this.cast = event.cast
    this.hide = false;
  }
}
