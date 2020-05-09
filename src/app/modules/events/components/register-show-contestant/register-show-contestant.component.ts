import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Show} from '../../models/show';
import {OwnerService} from '../../../owner/services/owner.service';
import {Contestant} from '../../../owner/models/contestant';
import {EventService} from '../../services/event.service';
import {ShowContestant} from '../../models/showcontestant';
import {ConfirmationDialogComponent} from '../../../../components/confirmation-dialog/confirmation-dialog.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-register-show-contestant',
  templateUrl: './register-show-contestant.component.html',
  styleUrls: ['./register-show-contestant.component.scss']
})
export class RegisterShowContestantComponent implements OnInit {

  registerForm: FormGroup;
  shows$: Observable<Show[]>;
  contestants$: Observable<Contestant[]>;
  showContestant: ShowContestant;
  formSubmit: boolean;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ownerService: OwnerService,
              private eventService: EventService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<RegisterShowContestantComponent>,
              private dialog: MatDialog) {

    this.formSubmit = false;
    this.shows$ = this.data;
    this.contestants$ =  this.ownerService.getContestantsByOwnerId(1);


    this.registerForm =  this.fb.group({
      show: ['', Validators.required],
      contestant: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  checkError(control: string): boolean {
    return this.registerForm.get(control).hasError('required')
      && this.formSubmit;

  }

  onRegisterShowContestant() {

    // If the form is invalid end the register action
    if (this.registerForm.invalid) {
      this.formSubmit = true;
      return;
    }

    // Create a show contestant
    this.showContestant = {
      showId: this.registerForm.get('show').value,
      contestantId: this.registerForm.get('contestant').value,
      id: 0
    };


    this.eventService.addShowContestant(this.showContestant).subscribe();

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



    this.dialogRef.close();

  }
}
