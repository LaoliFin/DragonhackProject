import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { CultureComponent } from './components/culture/culture.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    
    OgrodjeComponent,
    CultureComponent,
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "culture", component: CultureComponent },
      { path: "eventpage", component: EventPageComponent },
      { path: "homepage", component: HomepageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [ OgrodjeComponent ]
})
export class AppModule { }
