import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    releaseYr: new FormControl('', [Validators.required]),
  });

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.title.next('Add Movies');
  }

}
