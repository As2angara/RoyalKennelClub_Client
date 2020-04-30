import { Component, OnInit } from '@angular/core';
import {BreedServiceService} from '../../services/breed-service.service';
import {Breed} from '../../models/breed';
import {BreedPic} from '../../models/breedpic';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent implements OnInit {

  breeds$: Observable<Breed[]>;
  breedPics$: Observable<BreedPic[]>;
  num: number[];

  constructor(private breeds: BreedServiceService) {
    this.num = [1, 71, 161, 149, 121, 17, 115, 50, 58, 113, 12, 42, 31, 2, 30, 210, 212, 55, 4, 24, 51];

    this.breeds$ = breeds.getBreeds().pipe(
      map(brds => brds.filter( brd => {

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.num.length; i++) {
          if (brd.id === this.num[i]) { return brd; }
        }
      }))
    );

    this.breedPics$ = breeds.getBreedPics();

  }

  ngOnInit() {
  }



}
