import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component'

const routes: Routes = [
  { path: '',        component: MainComponent },
  { path: 'account', component: AccountComponent },
  { path: '**',      redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
