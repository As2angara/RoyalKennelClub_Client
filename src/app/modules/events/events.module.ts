import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {BreedListComponent} from '../breeds/components/breed-list/breed-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { RegisterShowContestantComponent } from './components/register-show-contestant/register-show-contestant.component';
import {MatDialogModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { EventInfoComponent } from './components/event-info/event-info.component';



@NgModule({
  declarations: [EventListComponent, RegisterShowContestantComponent, EventInfoComponent],
  entryComponents: [RegisterShowContestantComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: 'info/:id',
        component: EventInfoComponent
      }
    ])
  ]
})
export class EventsModule { }
