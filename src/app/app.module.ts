import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FilterPipe} from './pipes'
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { InfiniteScrollService } from './infinite-scroll.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule
  ],
  providers: [InfiniteScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
