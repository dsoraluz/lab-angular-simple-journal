import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  },
  // {
  //   path: 'phone/:id',
  //   component: PhoneDetailsComponent
  // },
  {
    //When you go to any page other than these, redirect to the homepage
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
