import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  cast = Array();

  @Output() outputMovie = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  CreateNewMovie(movieID:number, movieName:string){
    let movie =
      {
        "id": movieID,
        "name": movieName,
        "cast": this.cast,
      }
    this.outputMovie.emit(movie)
  }

  AddToCast(event){
    this.cast.push(event);
  }
}
