import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGuard } from 'src/guard/child.guard';
import { ParentGuard } from 'src/guard/parent.guard';
import { MoviesResolver } from 'src/resolvers/movies.resolver';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'movies',
    canActivate: [ParentGuard],
    canActivateChild: [ChildGuard],
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MoviesComponent,
        resolve: { movies: MoviesResolver },
      },
      { path: ':moviesId', component: MovieDetailsComponent },
      { path: 'watch-list', component: WatchListComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
