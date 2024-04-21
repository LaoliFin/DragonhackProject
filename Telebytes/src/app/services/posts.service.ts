import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../components/post/post.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost:3000";

  public getEventPosts(): Observable<Post[]> {
    const url: string = `${this.apiUrl}/events`;
    return this.http
      .get<Post[]>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error.error.message || error.statusText);
  }
}
