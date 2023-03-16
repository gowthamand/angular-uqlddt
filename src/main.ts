import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <div></div>
  `,
})
export class App {
  name = 'Angular';
  data = ['1010', '0101', '1010', '0101'];
  data1: any = this.data.map((a) => a.split('')).flat();
  constructor() {
    console.log(this.data1)
  }
}

bootstrapApplication(App);
