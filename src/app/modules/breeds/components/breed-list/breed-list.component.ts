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


  constructor(private breeds: BreedServiceService) {

    this.breeds$ = breeds.getBreeds();

  }

  ngOnInit() {


  }



}
