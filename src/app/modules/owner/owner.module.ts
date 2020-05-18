import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from './components/owner-dashboard/owner-dashboard.component';
import {RouterModule} from '@angular/router';
import {MatDialogModule, MatFormFieldModule, MatIconModule, MatMenuModule} from '@angular/material';
import { AddContestantComponent } from './components/add-contestant/add-contestant.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditContestantComponent } from './components/edit-contestant/edit-contestant.component';
import { ViewShowsComponent } from './components/view-shows/view-shows.component';
import {ConfirmationDialogComponent} from '../../components/confirmation-dialog/confirmation-dialog.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';



@NgModule({
  declarations: [OwnerDashboardComponent, AddContestantComponent, EditContestantComponent, ViewShowsComponent],
  entryComponents: [AddContestantComponent, EditContestantComponent, ViewShowsComponent],
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
    ]),
    MatFormFieldModule,
    LazyLoadImageModule
  ]
})
export class OwnerModule { }
