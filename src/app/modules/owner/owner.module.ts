import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from './components/owner-dashboard/owner-dashboard.component';
import {RouterModule} from '@angular/router';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';
import { AddContestantComponent } from './components/add-contestant/add-contestant.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [OwnerDashboardComponent, AddContestantComponent],
  entryComponents: [AddContestantComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OwnerDashboardComponent
      }
    ]),
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
