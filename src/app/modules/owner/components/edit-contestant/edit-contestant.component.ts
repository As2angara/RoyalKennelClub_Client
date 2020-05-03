import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {Contestant} from '../../models/contestant';
import {Breed} from '../../../breeds/models/breed';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OwnerService} from '../../services/owner.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-contestant',
  templateUrl: './edit-contestant.component.html',
  styleUrls: ['./edit-contestant.component.scss']
})
export class EditContestantComponent implements OnInit {

  editForm: FormGroup;
  contestant: Contestant;
  contestantQ = {} as Contestant;
  breeds$: Observable<Breed[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private breedService: BreedServiceService,
              private fb: FormBuilder,
              private ownerService: OwnerService,
              private dialog: MatDialogRef<EditContestantComponent>) {

    this.breeds$ = breedService.getBreeds();
    this.contestant = this.data;

    this.editForm =  this.fb.group({
      name: [''],
      breed: [''],
      gender: [''],
      rank: ['']
    });

  }

  ngOnInit() {

    this.editForm.get('name').patchValue(this.contestant.name);
    this.editForm.get('breed').patchValue(this.contestant.breed);

    if (this.contestant.isMale) {
      this.editForm.controls.gender.patchValue('male');
    } else {
      this.editForm.controls.gender.patchValue('female');
    }

    if (this.contestant.isSpecial) {
      this.editForm.controls.rank.patchValue('specialty');
    } else {
      this.editForm.controls.rank.patchValue('regular');
    }

  }

  onEditContestant() {

    // retrieve contestant name
    this.contestantQ.name = this.editForm.get('name').value;

    // retrieve contestant breed
    this.contestantQ.breed = this.editForm.get('breed').value;

    // retrieve contestant gender
    if (this.editForm.get('gender').value === 'male') {
      this.contestantQ.isMale = true;
    } else {
      this.contestantQ.isMale = false;
    }

    // retrieve contestant rank
    if (this.editForm.get('rank').value === 'regular') {
      this.contestantQ.isSpecial = false;
    } else {
      this.contestantQ.isSpecial = true;
    }

    this.contestantQ.id = this.contestant.id;

    this.ownerService.editContestant(this.contestantQ).subscribe();

    this.dialog.afterClosed().subscribe(result => {
      window.location.reload();
    });

    this.dialog.close();

  }

}
