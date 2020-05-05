import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Breed} from '../models/breed';
import {BreedPic} from '../models/breedpic';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {

  private url = 'https://royalkennelclub.herokuapp.com/breeds';

  constructor(private http: HttpClient ) { }

  getBreeds(): Observable<Breed[]> {

    return this.http.get<Breed[]>(this.url);
  }


}
