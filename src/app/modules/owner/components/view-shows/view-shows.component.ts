import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {Show} from '../../../events/models/show';
import {EventService} from '../../../events/services/event.service';
import {Contestant} from '../../models/contestant';
import {ShowContestant} from '../../../events/models/showcontestant';
import {map} from 'rxjs/operators';
import {Event} from '../../../events/models/event';
import {ConfirmationDialogComponent} from '../../../../components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view-shows',
  templateUrl: './view-shows.component.html',
  styleUrls: ['./view-shows.component.scss']
})
export class ViewShowsComponent implements OnInit {

  deenrollForm: FormGroup;
  shows$: Observable<Show[]>;
  events$: Observable<Event[]>;
  con$: Observable<ShowContestant>;
  formSubmit: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private eventService: EventService,
              private dialogRef: MatDialogRef<ViewShowsComponent>,
              private dialog: MatDialog) {

    this.formSubmit = false;
    this.deenrollForm =  this.fb.group({
      show: ['', Validators.required]
    });

    this.shows$ = this.data.shows;
    this.events$ = this.data.events;
  }

  ngOnInit() {
  }

  checkError(control: string): boolean {
    return this.deenrollForm.get(control).hasError('required')
      && this.formSubmit;

  }

  onRemoveShowContestant() {

    if (this.deenrollForm.invalid) {
      this.formSubmit = true;
      return;
    }

    const contestant: ShowContestant = {
      // tslint:disable-next-line:radix
      showId: parseInt(this.deenrollForm.get('show').value),
      contestantId: this.data.contestant.id,
      id: 0
    };

    this.con$ = this.eventService.getShowContestant(contestant);

    this.con$.pipe(
      map(con => this.eventService.deleteShowContestant(con.id).subscribe())
    ).subscribe();

    this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '400px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw',
      position: {
        top: '50px'
      },
      data: 'The contestant was removed from the show!'

    });

    this.dialogRef.close();
  }

}
