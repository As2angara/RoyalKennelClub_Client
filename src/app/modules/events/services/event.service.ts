import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../models/show';
import {ShowContestant} from '../models/showcontestant';
import {Event} from '../models/event';
import {ShowContestantFull} from '../models/showcontestantfull';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'https://royalkennelclub.herokuapp.com';

  constructor(private http: HttpClient) { }

  // Read Operations
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.url}/event`);
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.url}/show`);
  }

  getShowsByContestantId(id: number): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.url}/show/contestants/${id}`);
  }

  getShowContestant(con: ShowContestant): Observable<ShowContestant> {

    return this.http.get<ShowContestant>(`${this.url}/show-contestant/${con.showId}/${con.contestantId}`);
  }

  getShowContestantFullTable(): Observable<ShowContestantFull[]> {
    return this.http.get<ShowContestantFull[]>(`${this.url}/show-contestant/full`);
  }

  // Create Operation
  addShowContestant(con: ShowContestant): Observable<ShowContestant> {

    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http.post<ShowContestant>(`${this.url}/show-contestant`, con, config);
  }

  // Delete Operation
  deleteShowContestant(id: number): Observable<ShowContestant> {

    return this.http.delete<ShowContestant>(`${this.url}/show-contestant/${id}`);
  }


}
