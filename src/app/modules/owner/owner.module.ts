import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from './components/owner-dashboard/owner-dashboard.component';
import {RouterModule} from '@angular/router';
import {MatDialogModule, MatFormFieldModule, MatIconModule, MatMenuModule} from '@angular/material';
import { AddContestantComponent } from './components/add-contestant/add-contestant.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditContestantComponent } from './components/edit-contestant/edit-contestant.component';



@NgModule({
  declarations: [OwnerDashboardComponent, AddContestantComponent, EditContestantComponent],
  entryComponents: [AddContestantComponent, EditContestantComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OwnerDashboardComponent
      }
    ])
  ]
})
export class OwnerModule { }
