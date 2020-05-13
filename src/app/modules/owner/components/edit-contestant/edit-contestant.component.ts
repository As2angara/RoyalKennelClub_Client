import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {Contestant} from '../../models/contestant';
import {Breed} from '../../../breeds/models/breed';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OwnerService} from '../../services/owner.service';
import {tap} from 'rxjs/operators';
import {ConfirmationDialogComponent} from '../../../../components/confirmation-dialog/confirmation-dialog.component';

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
  formSubmit: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private ownerService: OwnerService,
              private dialogRef: MatDialogRef<EditContestantComponent>,
              private dialog: MatDialog) {

    this.formSubmit = false;
    this.breeds$ = this.data.breeds;
    this.contestant = this.data.contestant;

    this.editForm =  this.fb.group({
      name: ['', Validators.required],
      breed: [''],
      gender: [''],
      rank: ['']
    });

  }

  ngOnInit() {

    if (window.innerWidth < 400) {
      this.dialogRef.updateSize('100vw', 'auto');
    }

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

  checkError(control: string): boolean {
    return this.editForm.get(control).hasError('required')
      && this.formSubmit;

  }

  onEditContestant() {

    if (this.editForm.invalid) {
      this.formSubmit = true;
      return;
    }

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

    this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '400px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw',
      position: {
        top: '50px'
      },
      data: 'Edited Successfully!'

    });

    this.dialogRef.close();
  }

}
