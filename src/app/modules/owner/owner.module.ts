import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from './components/owner-dashboard/owner-dashboard.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [OwnerDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OwnerDashboardComponent
      }
    ])
  ]
})
export class OwnerModule { }
