import { Component } from '@angular/core';

@Component({
  selector: 'app-example-two-way-binding',
  templateUrl: './example-two-way-binding.component.html',
  styleUrls: ['./example-two-way-binding.component.css']
})
export class ExampleTwoWayBindingComponent {
  firstName: string = "";
  lastName: string = "";
}
