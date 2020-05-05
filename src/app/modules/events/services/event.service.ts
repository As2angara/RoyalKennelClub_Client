import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../models/show';
import {ShowContestant} from '../models/showcontestant';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'https://royalkennelclub.herokuapp.com/show';
  private url2 = 'https://royalkennelclub.herokuapp.com/event';
  private url3 = 'https://royalkennelclub.herokuapp.com/show-contestant';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url2);
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.url);
  }

  addShowContestant(con: ShowContestant): Observable<ShowContestant> {

    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http.post<ShowContestant>(this.url3, con, config);
  }


}
