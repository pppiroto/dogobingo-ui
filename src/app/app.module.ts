import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule,
    FormsModule,
    MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
