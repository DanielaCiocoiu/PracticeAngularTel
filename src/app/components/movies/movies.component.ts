import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {
    const snapshot = activateRoute.snapshot;
    const movies = snapshot.data['movies'];
    console.log(movies);
  }

  ngOnInit(): void {}
}
