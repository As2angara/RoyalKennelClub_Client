import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OwnerService} from '../../services/owner.service';
import {Observable} from 'rxjs';
import {Contestant} from '../../models/contestant';
import {MatDialog} from '@angular/material';
import {AddContestantComponent} from '../add-contestant/add-contestant.component';
import {EditContestantComponent} from '../edit-contestant/edit-contestant.component';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerDashboardComponent implements OnInit {

  contestants$: Observable<Contestant[]>;

  constructor(private service: OwnerService, public dialog: MatDialog) {
    // Owner Id of 1 is only used in the demo
    this.contestants$ = this.service.getContestantsByOwnerId(1);

  }

  ngOnInit() {}


  addContestant() {
    this.dialog.open(AddContestantComponent, {
      minWidth: '500px',
      minHeight: '700px',
      maxHeight: '100vh',
      maxWidth: '100vw'
    });
  }

  editContestant(con) {
    this.dialog.open(EditContestantComponent, {
      minWidth: '500px',
      minHeight: '700px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: con
    });
  }

  deleteContestant(con) {
    this.service.deleteContestant(con.id).subscribe();
  }

}
