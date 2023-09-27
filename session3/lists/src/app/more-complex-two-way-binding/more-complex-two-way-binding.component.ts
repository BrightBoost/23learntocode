import { Component } from '@angular/core';

@Component({
  selector: 'app-more-complex-two-way-binding',
  templateUrl: './more-complex-two-way-binding.component.html',
  styleUrls: ['./more-complex-two-way-binding.component.css']
})
export class MoreComplexTwoWayBindingComponent {
  persons = [{ firstName: "", lastName: "" }, { firstName: "", lastName: "" }, { firstName: "", lastName: "" }]

  onFormSubmit(e: any) {
    console.log(e.target);
  }
}
