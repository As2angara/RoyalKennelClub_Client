import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Breed} from '../models/breed';

@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {

  private url = 'https://api.thedogapi.com/v1/breeds';

  constructor(private http: HttpClient ) { }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url);
  }
}
