import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Breed} from '../../../breeds/models/breed';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {map} from 'rxjs/operators';
import {Contestant} from '../../models/contestant';
import {OwnerService} from '../../services/owner.service';

@Component({
  selector: 'app-add-contestant',
  templateUrl: './add-contestant.component.html',
  styleUrls: ['./add-contestant.component.scss']
})
export class AddContestantComponent implements OnInit {

  addForm: FormGroup;
  breeds$: Observable<Breed[]>;
  con$: Observable<Contestant>;
  dogGroup = [];
  contestant = {} as Contestant;


  constructor(private breeds: BreedServiceService,
              private ownerService: OwnerService,
              private fb: FormBuilder) {
    const num = [1, 71, 161, 149, 121, 17, 115, 50, 58, 113, 12, 42, 31, 2, 30, 210, 212, 55, 4, 24, 51];

    this.breeds$ = breeds.getBreeds().pipe(
      map(brds => brds.filter(brd => {
        for (const n of num) {
          if (n === brd.id) {
            return brd;
          }
        }
      }))
    );

    this.dogGroup = ['Toy', 'Terrier', 'Herding', 'Sporting', 'Non-Sporting', 'Hound', 'Working'];

    this.addForm =  this.fb.group({
      name: [''],
      breed: ['Affenpinscher'],
      dog_group: ['Toy'],
      gender: ['male'],
      rank: ['regular']
    });
  }

  ngOnInit() {
  }

  onAddContestant() {

    // retrieve contestant name
    this.contestant.name = this.addForm.get('name').value;

    // retrieve contestant breed and dog_group
    this.contestant.breed = this.addForm.get('breed').value;
    this.contestant.group = this.addForm.get('dog_group').value;

    // retrieve contestant gender and rank
    if (this.addForm.get('gender').value === 'male') {
      this.contestant.isMale = true;
    } else {
      this.contestant.isMale = false;
    }

    if (this.addForm.get('dog_group').value === 'regular') {
      this.contestant.isSpecial = false;
    } else {
      this.contestant.isSpecial = true;
    }

    this.ownerService.addContestant(this.contestant).subscribe();

  }

}
