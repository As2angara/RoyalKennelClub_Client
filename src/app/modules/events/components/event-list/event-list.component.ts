import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Show} from '../../models/show';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events$: Observable<Event[]>;
  shows$: Observable<Show[]>;

  constructor(private eventService: EventService) {

    this.events$ = this.eventService.getEvents();
    this.shows$ = this.eventService.getShows();
  }

  ngOnInit() {
  }

}
