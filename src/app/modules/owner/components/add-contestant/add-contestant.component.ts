import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Breed} from '../../../breeds/models/breed';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {map} from 'rxjs/operators';
import {Contestant} from '../../models/contestant';
import {OwnerService} from '../../services/owner.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../../components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-add-contestant',
  templateUrl: './add-contestant.component.html',
  styleUrls: ['./add-contestant.component.scss']
})
export class AddContestantComponent implements OnInit {

  addForm: FormGroup;
  breeds$: Observable<Breed[]>;
  contestant = {} as Contestant;
  formSubmit: boolean;


  constructor(private ownerService: OwnerService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddContestantComponent>,
              private dialog: MatDialog) {

    this.formSubmit = false;
    this.breeds$ = this.data;

    this.addForm =  this.fb.group({
      name: ['', Validators.required],
      breed: ['Affenpinscher'],
      gender: ['male'],
      rank: ['regular']
    });
  }

  ngOnInit() {
  }

  checkError(control: string): boolean {
    return this.addForm.get(control).hasError('required')
      && this.formSubmit;

  }

  onAddContestant() {

    if (this.addForm.invalid) {
      this.formSubmit = true;
      return;
    }


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

    this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '400px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw',
      position: {
        top: '50px'
      },
      data: 'Registered Successfully!'

    });

    this.ownerService.addContestant(this.contestant).subscribe();



    this.dialogRef.close();

  }

}
