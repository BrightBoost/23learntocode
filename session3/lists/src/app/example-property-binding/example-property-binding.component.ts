import { Component } from '@angular/core';

@Component({
  selector: 'app-example-property-binding',
  templateUrl: './example-property-binding.component.html',
  styleUrls: ['./example-property-binding.component.css']
})
export class ExamplePropertyBindingComponent {
  hasNotBeenChanged: boolean = true;
  nr: number = 48;
  onChangeInput() {
    this.hasNotBeenChanged = false;
  }

}
