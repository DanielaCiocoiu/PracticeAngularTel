import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-demo',
  templateUrl: './one-way-demo.component.html',
  styleUrls: ['./one-way-demo.component.css'],
})
export class OneWayDemoComponent implements OnInit {
  numberA = 10;
  stringA = 'Test';
  boolA = true;
  constructor() {}

  ngOnInit(): void {}

  getStringValue(): string {
    return 'this is a test';
  }
}
