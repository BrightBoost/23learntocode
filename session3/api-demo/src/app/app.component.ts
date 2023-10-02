import { Component } from '@angular/core';
import { Service } from './models/service.model';
import { SpaService } from './providers/spa.service';
import { Observable } from 'rxjs/internal/Observable';
import { Review } from './models/review.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services!: Service[];
  title = 'api-demo';
  review: Review = new Review("", "", "");

  constructor(private spaService: SpaService) {
    this.spaService.getServices().subscribe(data => {
      this.services = data;
      console.log(data);
    });
  }

  onReviewSubmit() {
    this.spaService.addNewReview(this.review).subscribe((res) => {
      console.log(res);
    });
  }
}
