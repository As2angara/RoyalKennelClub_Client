import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OwnerService} from '../../services/owner.service';
import {Observable} from 'rxjs';
import {Contestant} from '../../models/contestant';
import {MatDialog} from '@angular/material';
import {AddContestantComponent} from '../add-contestant/add-contestant.component';
import {EditContestantComponent} from '../edit-contestant/edit-contestant.component';
import {map} from 'rxjs/operators';
import {Owner} from '../../models/owner';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerDashboardComponent implements OnInit {

  contestants$: Observable<Contestant[]>;
  owner$: Observable<Owner>;
  contestant$: Contestant;


  constructor(private service: OwnerService, public dialog: MatDialog) {
    // Owner Id of 1 is only used in the demo
    this.contestants$ = this.service.getContestantsByOwnerId(1);
    this.owner$ = this.service.getOwnerById(1);

  }

  ngOnInit() {}


  addContestant() {
    const modalRef = this.dialog.open(AddContestantComponent, {
      minWidth: '500px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw'
    });

  }

  editContestant(con) {
    this.dialog.open(EditContestantComponent, {
      minWidth: '500px',
      minHeight: 'auto',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: con
    });


  }

  deleteContestant(con) {
    this.service.deleteContestant(con.id).subscribe();

    window.location.reload();
  }

}
