import { Injectable } from '@angular/core';
import { Service } from '../models/service.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Review } from '../models/review.model';
@Injectable({
  providedIn: 'root'
})
export class SpaService {

  private urlRoot: string = "http://localhost:8081/";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get(this.urlRoot + "api/services", this.httpOptions)
      .pipe(map(res => <Service[]>res));
  }

  addNewReview(review: Review) {
    return this.http.post<Review>(this.urlRoot + "api/reviews", JSON.stringify(review), this.httpOptions);
  }
}
