import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarService } from './cars/carservice';
import { DataTableModule } from 'primeng/primeng';
import { SimpleComponent } from './simple/simple.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule

  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
