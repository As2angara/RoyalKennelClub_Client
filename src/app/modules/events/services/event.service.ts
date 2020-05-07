import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../models/show';
import {ShowContestant} from '../models/showcontestant';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'https://royalkennelclub.herokuapp.com';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.url}/event`);
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.url}/show`);
  }

  getShowsByContestantId(id: number): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.url}/show/contestants/${id}`);
  }

  addShowContestant(con: ShowContestant): Observable<ShowContestant> {

    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http.post<ShowContestant>(`${this.url}/show-contestant`, con, config);
  }

  deleteShowContestant(con: ShowContestant): Observable<ShowContestant> {

    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    // @ts-ignore
    return this.http.delete<ShowContestant>(`${this.url}/show-contestant`, con, config);
  }


}
