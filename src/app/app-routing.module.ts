import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'breeds',
    loadChildren: () => import('./modules/breeds/breeds.module').then(m => m.BreedsModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./modules/owner/owner.module').then(m => m.OwnerModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
