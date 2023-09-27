import { Component } from '@angular/core';

@Component({
  selector: 'app-example-interpolation',
  templateUrl: './example-interpolation.component.html',
  styleUrls: ['./example-interpolation.component.css']
})
export class ExampleInterpolationComponent {
  empName: string = "Elena";
  x: number = 1;
  y: number = 3;
  makeFullName() {
    this.empName = "Elena Maas";
    this.y = 10;
  }
  getTotal(input: string) {
    return (this.x + this.y + parseFloat(input));
  }
}
