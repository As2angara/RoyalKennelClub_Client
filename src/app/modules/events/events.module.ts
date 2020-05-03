import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {BreedListComponent} from '../breeds/components/breed-list/breed-list.component';
import { EventListComponent } from './components/event-list/event-list.component';



@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent
      }
    ])
  ]
})
export class EventsModule { }
