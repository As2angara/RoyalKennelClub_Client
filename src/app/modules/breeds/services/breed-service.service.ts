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

  private url = 'https://api.thedogapi.com/v1/breeds';
  private url2 = 'http://localhost:8080/breeds';
  private url3 = 'https://royalkennelclub.herokuapp.com/breeds';

  constructor(private http: HttpClient ) { }

  getBreeds(): Observable<Breed[]> {
    const num = [1, 71, 161, 149, 121, 17, 115, 50, 58, 113, 12, 42, 31, 2, 30, 210, 212, 55, 4, 24, 51];

    return this.http.get<Breed[]>(this.url).pipe(
      map(brds => brds.filter(brd => {
        for (const n of num) {
          if (n === brd.id) {
            return brd;
          }
        }
      }))
    );
  }

  getBreedPics(): Observable<BreedPic[]> {
    return this.http.get<BreedPic[]>(this.url3);
  }

}
