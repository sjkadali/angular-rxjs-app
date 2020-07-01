import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { MovieService } from './../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  
  constructor(
    private router: Router,
    private movieService: MovieService,
    private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.title.next('Add Movies');
    this.movieForm = new FormGroup({      
      name: new FormControl(),
      image: new FormControl(),
      genre: new FormControl(),
      releaseYr: new FormControl(),
    });
  
  }

  /* addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value)
        .subscribe(res => {
          this.movieForm.reset();
          this.router.navigate(['/']);
        });
    }
    else {
      console.log("form not valid");
    }
    console.log("form value: " + this.movieForm);
  } */

  onSubmit():void {
    console.log("form value: " + this.movieForm.value);

  }
}
