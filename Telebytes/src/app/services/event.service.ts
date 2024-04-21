import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as cheerio from 'cheerio';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = '/api/org/%C5%A0tudentski-%C5%BDuri-ljubljana/357874';

  constructor(private http: HttpClient) {}

  scrapeEvents(): Observable<any[]> {
    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map(html => {
        const $ = cheerio.load(html);
        const events: any[] = [];

        $('.event-card').each((index, element) => {
          const event = {
            title: $(element).find('.title h3').text().trim(),
            date: $(element).find('.date').text().trim(),
            location: $(element).find('.subtitle').text().trim(),
            link: $(element).attr('data-link')
          };
          events.push(event);
        });

        return events;
      }),
      catchError(error => {
        console.error('Error scraping events:', error);
        return throwError(error);
      })
    );
  }

  // Method to simulate API call for direct scraping
  getEvents(): Observable<any> {
    return this.scrapeEvents();
  }
}
