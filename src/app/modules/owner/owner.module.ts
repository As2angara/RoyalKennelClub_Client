import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from './components/owner-dashboard/owner-dashboard.component';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material';
import { AddContestantComponent } from './components/add-contestant/add-contestant.component';



@NgModule({
  declarations: [OwnerDashboardComponent, AddContestantComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: OwnerDashboardComponent
      }
    ])
  ]
})
export class OwnerModule { }
