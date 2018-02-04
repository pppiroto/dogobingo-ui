import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { RoomComponent } from './room/room.component';

import { AccountService } from './account.service';
import { DokobingoService } from './dokobingo.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    HttpClientXsrfModule, /*.withOptions({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN'})*/
    FormsModule,
    MatIconModule, MatMenuModule,MatToolbarModule, MatButtonModule, MatCheckboxModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    AccountService, 
    DokobingoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
