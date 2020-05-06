import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Breed} from '../../../breeds/models/breed';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {map} from 'rxjs/operators';
import {Contestant} from '../../models/contestant';
import {OwnerService} from '../../services/owner.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-contestant',
  templateUrl: './add-contestant.component.html',
  styleUrls: ['./add-contestant.component.scss']
})
export class AddContestantComponent implements OnInit {

  addForm: FormGroup;
  breeds$: Observable<Breed[]>;
  contestant = {} as Contestant;


  constructor(private breeds: BreedServiceService,
              private ownerService: OwnerService,
              private fb: FormBuilder,
              private dialog: MatDialogRef<AddContestantComponent>) {


    this.breeds$ = breeds.getBreeds();

    this.addForm =  this.fb.group({
      name: [''],
      breed: ['Affenpinscher'],
      gender: ['male'],
      rank: ['regular']
    });
  }

  ngOnInit() {
  }

  onAddContestant() {

    // retrieve contestant name
    this.contestant.name = this.addForm.get('name').value;

    // retrieve contestant breed
    this.contestant.breed = this.addForm.get('breed').value;

    // retrieve contestant gender and rank
    if (this.addForm.get('gender').value === 'male') {
      this.contestant.isMale = true;
    } else {
      this.contestant.isMale = false;
    }

    if (this.addForm.get('rank').value === 'regular') {
      this.contestant.isSpecial = false;
    } else {
      this.contestant.isSpecial = true;
    }

    this.ownerService.addContestant(this.contestant).subscribe();

    this.dialog.close();
    window.location.reload();

  }

}
