import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Puppy } from '../models/puppy.model';

@Injectable({
  providedIn: 'root'
})
export class PuppyService {

  private puppiesUrl = "http://localhost:8081/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // get all puppies
  getPuppies(): Observable<Puppy[]> {
    return this.http.get(this.puppiesUrl + "api/puppies", this.httpOptions).pipe(map(res => <Puppy[]>res));
  }

  // get puppy by name
  getPuppyByName(name: string): Observable<Puppy> {
    return this.http.get(this.puppiesUrl + "api/puppies/" + name, this.httpOptions).pipe(map(res => <Puppy>res));
  }

  // add a new puppy
  addNewPuppy(puppy: Puppy): Observable<Puppy>{
    return this.http.post<Puppy>(this.puppiesUrl, JSON.stringify(puppy), this.httpOptions);
  }
}
