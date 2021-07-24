import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-prop-binding',
  templateUrl: './event-prop-binding.component.html',
  styleUrls: ['./event-prop-binding.component.css'],
})
export class EventPropBindingComponent implements OnInit {
  inputDisabled = false;
  inputValue = 'Value for the input';
  constructor() {}

  ngOnInit(): void {}

  testTheClick(): void {
    console.log('Test in the  clicked');
    this.inputValue = this.inputValue + 'a';
    this.inputDisabled = !this.inputDisabled;
  }
  // testTheInput(event: any){
  //   console.log("event ");
  // }

  testTheInput() {
    console.log('Test in the input desabled ');
  }
}
