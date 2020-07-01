import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { identifierModuleUrl } from '@angular/compiler';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';


const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'add',
    component: AddMovieComponent,
  },
  {
    path: 'edit',
    component: EditMovieComponent,
  },
  {
      path: ':id',
      component: MovieDetailComponent,
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
