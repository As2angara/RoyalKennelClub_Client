import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'https://royalkennelclub.herokuapp.com/show';
  private url2 = 'https://royalkennelclub.herokuapp.com/event';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url2);
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.url);
  }


}
