import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NaviComponent } from './navi/navi.component';
import { AccountComponent } from './account/account.component';

import { BsDropdownModule } from 'ngx-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AccountComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule,
    FormsModule,
    CoreModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
