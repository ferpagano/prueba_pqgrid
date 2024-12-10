import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pqgrid2Component } from './pqgrid2.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';

@NgModule({
  declarations: [
    AppComponent,
    Pqgrid2Component,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
