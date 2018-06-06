import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FluteComponent } from './flute/flute.component';
import { CodeComponent } from './code/code.component';
import { NotFoundComponent } from './not-found.component';

const appRouting: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'code', component: CodeComponent },
  { path: 'flute', component: FluteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
