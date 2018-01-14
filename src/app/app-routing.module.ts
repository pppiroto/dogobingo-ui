import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: '',         component: MainComponent },
  { path: 'room',     component: RoomComponent },
  { path: '**',       redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
