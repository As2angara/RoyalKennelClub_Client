import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Contestant} from '../models/contestant';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = 'https://royalkennelclub.herokuapp.com/contestants/owner/';
  private url2 = 'https://royalkennelclub.herokuapp.com/contestants/'

  constructor(private http: HttpClient) { }

  getContestantsByOwnerId(id: number): Observable<Contestant[]> {
    return this.http.get<Contestant[]>(`${this.url}${id}`);

  }

  addContestant(contestant: Contestant): Observable<Contestant> {


    const data = {
      name: contestant.name,
      ownerId: 1,
      breed: contestant.breed,
      group: '',
      isMale: contestant.isMale,
      isSpecial: contestant.isSpecial
    };


    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<Contestant>(this.url2, data, config);
  }
}
