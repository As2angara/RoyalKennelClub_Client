import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Show} from '../../models/show';
import {EventService} from '../../services/event.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EditContestantComponent} from '../../../owner/components/edit-contestant/edit-contestant.component';
import {map} from 'rxjs/operators';
import {RegisterShowContestantComponent} from '../register-show-contestant/register-show-contestant.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events$: Observable<Event[]>;
  shows$: Observable<Show[]>;

  constructor(private eventService: EventService,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router) {

    this.events$ = this.eventService.getEvents();
    this.shows$ = this.eventService.getShows();
  }

  ngOnInit() {
  }

  registerShowContestant(event) {
    this.dialog.open(RegisterShowContestantComponent, {
      minWidth: '500px',
      minHeight: '700px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: this.shows$.pipe(map( shows => shows.filter(show => show.eventId === event.id) ))

    });

  }


  showInfo(id) {
    this.router.navigate([`info/${id}`], {relativeTo: this.route});
  }
}
