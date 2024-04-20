import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventPageComponent } from './components/event-page/event-page.component';

@NgModule({
  declarations: [
    
  
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "eventpage", component: EventPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
