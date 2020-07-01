import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  movieForm: FormGroup;
  constructor(
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.title.next('Edit Movies');
    this.movieForm = new FormGroup({      
      name: new FormControl(),
      image: new FormControl(),
      genre: new FormControl(),
      releaseYr: new FormControl(),
    });
  }

  onUpdate(): void {
    console.log("form value: " + this.movieForm.value);
  }


}
