import { Component } from '@angular/core';
import { DateService } from '../providers/date.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  startingDate!: Date;
  todaysDate!: Date;
  endingDate!: Date;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.startingDate = this.dateService.startDate();
    this.todaysDate = this.dateService.todaysDate();
    this.endingDate = this.dateService.endDate();
   
  }
}
