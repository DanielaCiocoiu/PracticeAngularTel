import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent implements OnInit {
  users: string[] = ['User A', 'User B', 'User C'];

  constructor() {}

  ngOnInit(): void {}

  isAdmin() {
    return false;
  }
}
