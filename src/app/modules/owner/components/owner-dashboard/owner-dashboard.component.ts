import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OwnerService} from '../../services/owner.service';
import {Observable} from 'rxjs';
import {Contestant} from '../../models/contestant';
import {MatDialog} from '@angular/material';
import {AddContestantComponent} from '../add-contestant/add-contestant.component';
import {EditContestantComponent} from '../edit-contestant/edit-contestant.component';
import {map} from 'rxjs/operators';
import {Owner} from '../../models/owner';
import {BreedServiceService} from '../../../breeds/services/breed-service.service';
import {Breed} from '../../../breeds/models/breed';
import {ViewShowsComponent} from '../view-shows/view-shows.component';
import {EventService} from '../../../events/services/event.service';
import {ShowContestant} from '../../../events/models/showcontestant';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerDashboardComponent implements OnInit {

  contestants$: Observable<Contestant[]>;
  owner$: Observable<Owner>;
  breeds$: Observable<Breed[]>;
  showContestants$: Observable<ShowContestant[]>;


  constructor(private service: OwnerService,
              public dialog: MatDialog,
              private breedService: BreedServiceService,
              private eventService: EventService) {
    // Owner Id of 1 is only used in the demo
    this.contestants$ = this.service.getContestantsByOwnerId(1);
    this.owner$ = this.service.getOwnerById(1);

    this.breeds$ = breedService.getBreeds();

  }

  ngOnInit() {}


  addContestant() {
    this.dialog.open(AddContestantComponent, {
      minWidth: '500px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: this.breeds$
    });
  }

  viewShowsEnrolledIn(con) {

    this.dialog.open(ViewShowsComponent, {
      minWidth: '500px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        shows: this.eventService.getShowsByContestantId(con.id),
        events: this.eventService.getEvents(),
        contestant: con
      }
    });

  }

  editContestant(con) {
    this.dialog.open(EditContestantComponent, {
      minWidth: '500px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        contestant: con,
        breeds: this.breeds$
      }
    });

  }

  deleteContestant(con) {
    this.service.deleteContestant(con.id).subscribe();

    window.location.reload();
  }

}
