import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {Show} from '../../../events/models/show';
import {EventService} from '../../../events/services/event.service';
import {Contestant} from '../../models/contestant';
import {ShowContestant} from '../../../events/models/showcontestant';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-view-shows',
  templateUrl: './view-shows.component.html',
  styleUrls: ['./view-shows.component.scss']
})
export class ViewShowsComponent implements OnInit {

  deenrollForm: FormGroup;
  shows$: Observable<Show[]>;
  events$: Observable<Event[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private eventService: EventService,
              private dialog: MatDialogRef<ViewShowsComponent>) {

    this.deenrollForm =  this.fb.group({
      show: ['']
    });

    this.shows$ = this.data.shows;
    this.events$ = this.data.events;
  }

  ngOnInit() {


  }

  onRemoveShowContestant() {

  }

}
