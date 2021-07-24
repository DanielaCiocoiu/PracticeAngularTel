import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-atribute-directive',
  templateUrl: './atribute-directive.component.html',
  styleUrls: ['./atribute-directive.component.css'],
})
export class AtributeDirectiveComponent implements OnInit {
  users: UserModel[] = [
    {
      name: 'User A',
      active: true,
    },
    {
      name: 'User B',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit(): void { }
  getColor(user: UserModel): string{
    return user.active ? 'green' : 'red';
    
  }
}
