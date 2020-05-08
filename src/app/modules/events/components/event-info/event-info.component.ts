import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Show} from '../../models/show';
import {map} from 'rxjs/operators';
import {Event} from '../../models/event';
import {ShowContestantFull} from '../../models/showcontestantfull';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {

  id: number;
  shows$: Observable<Show[]>;
  event$: Observable<Event>;
  showContestantsFull$: Observable<ShowContestantFull[]>;

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.shows$ = this.eventService.getShows().pipe(
      map(shows => shows.filter( show => show.eventId === this.id ))
    );

    this.event$ = this.eventService.getEvents().pipe(
      map(events => events.filter(event => event.id === this.id)[0])
    );

    this.showContestantsFull$ = this.eventService.getShowContestantFullTable();
  }

  navigateBack() {
    this.router.navigate(['/events'], {relativeTo: this.route});
  }

}
