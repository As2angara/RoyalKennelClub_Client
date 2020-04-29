import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'breeds',
    loadChildren: () => import('./modules/breeds/breeds.module').then(m => m.BreedsModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./modules/owner/owner.module').then(m => m.OwnerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
