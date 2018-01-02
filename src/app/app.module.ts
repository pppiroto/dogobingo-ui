import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NaviComponent } from './navi/navi.component';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
