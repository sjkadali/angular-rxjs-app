import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { filter} from 'rxjs/Operators'
import { movies, Movie} from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private ROOT_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL);
  }

  getMovies(){
    return of(movies);
  }

  get(id: number) {
    return of(movies.find(movie => +movie.id === +id)
    );
  }
}
