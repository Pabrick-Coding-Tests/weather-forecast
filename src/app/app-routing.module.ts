import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// The routing has been set up in case more views come by.
const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: './views/main/main.module#MainModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
