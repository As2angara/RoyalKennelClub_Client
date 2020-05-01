import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Breed} from '../models/breed';
import {BreedPic} from '../models/breedpic';

@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {

  private url = 'https://api.thedogapi.com/v1/breeds';
  private url2 = 'http://localhost:8080/breeds';
  private url3 = 'https://royalkennelclub.herokuapp.com/breeds';

  constructor(private http: HttpClient ) { }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url);
  }

  getBreedPics(): Observable<BreedPic[]> {
    return this.http.get<BreedPic[]>(this.url2);
  }

}
