import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = 'https://royalkennelclub.herokuapp.com/contestants/owner/'

  constructor(private http: HttpClient) { }

  getContestantsByOwnerId(): Observable<> {

  }
}
