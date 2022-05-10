import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrintButtonComponent } from './components/print-button/print-button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrintButtonComponent,
    TasksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserModule,
    NgxPrintModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourAppModule {
}
