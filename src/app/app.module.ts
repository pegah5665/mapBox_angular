import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapBoxComponent } from './map-box/map-box.component';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent
  ],
  imports: [

    RouterModule.forRoot([
      {path: '', component: MapBoxComponent},

    ]),

    BrowserModule,
    FormsModule
  ],


  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
