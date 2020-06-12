import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id; number;
  movie: Movie;
  movieSub$: Subscription

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.get(this.id).subscribe(movie => {
      this.movie = movie;
      console.log("Movie: " + this.movieService);
    })
  }

}
