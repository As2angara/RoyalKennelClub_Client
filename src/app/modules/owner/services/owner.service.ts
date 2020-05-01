import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contestant} from '../models/contestant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = 'https://royalkennelclub.herokuapp.com/contestants/owner/'

  constructor(private http: HttpClient) { }

  getContestantsByOwnerId(id: number): Observable<Contestant[]> {
    return this.http.get<Contestant[]>(`${this.url}${id}`);

  }
}
