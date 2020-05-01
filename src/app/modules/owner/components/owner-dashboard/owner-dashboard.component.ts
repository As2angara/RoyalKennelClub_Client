import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../services/owner.service';
import {Observable} from 'rxjs';
import {Contestant} from '../../models/contestant';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit {

  contestants$: Observable<Contestant[]>;

  constructor(private service: OwnerService) {
    // Owner Id of 1 is only used in the demo
    this.contestants$ = this.service.getContestantsByOwnerId(1);
  }

  ngOnInit() {
  }

}
