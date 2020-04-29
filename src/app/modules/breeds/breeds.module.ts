import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { BreedListComponent } from './components/breed-list/breed-list.component';



@NgModule({
  declarations: [BreedListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BreedListComponent
      }
    ])
  ]
})
export class BreedsModule { }
