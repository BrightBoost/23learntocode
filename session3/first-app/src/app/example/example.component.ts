import { Component } from '@angular/core';
import { ExampleService } from '../providers/example.service'

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  blabla: string = "Hello!";
}
