import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Show} from '../../models/show';
import {OwnerService} from '../../../owner/services/owner.service';
import {Contestant} from '../../../owner/models/contestant';
import {EventService} from '../../services/event.service';
import {ShowContestant} from '../../models/showcontestant';

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


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ownerService: OwnerService,
              private eventService: EventService,
              private fb: FormBuilder,
              private dialog: MatDialogRef<RegisterShowContestantComponent>) {

    this.shows$ = this.data;
    this.contestants$ =  this.ownerService.getContestantsByOwnerId(1);


    this.registerForm =  this.fb.group({
      show: [''],
      contestant: ['']
    });
  }

  ngOnInit() {
  }

  onRegisterShowContestant() {

    this.showContestant = {
      showId: this.registerForm.get('show').value,
      contestantId: this.registerForm.get('contestant').value,
      id: 0
    };


    this.eventService.addShowContestant(this.showContestant).subscribe();

    this.dialog.close();

  }
}
