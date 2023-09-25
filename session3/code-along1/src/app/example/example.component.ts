import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnChanges {
  @Input() name!: string;
  @Input() age!: number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Input changed: ", changes);
  }

}
