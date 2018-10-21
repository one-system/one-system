import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { App1Module } from 'app1';
import { App2Module } from 'app2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App1Module,
    App2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
