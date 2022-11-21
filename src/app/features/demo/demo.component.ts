import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  constructor() {}

  ngOnInit(): void {}
}
