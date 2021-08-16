import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {
    console.log(activateRoute);
    const snapshot = activateRoute.snapshot;
    const id = snapshot.params['movieId'];
    console.log(id);
    
  }

  ngOnInit(): void {}
}
