import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    let headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.get("https://jsonplaceholder.typicode.com/posts", headers)
      .pipe(map(res => <Post[]>res));
  }
}
