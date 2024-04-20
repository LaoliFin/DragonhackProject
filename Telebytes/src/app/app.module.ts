import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { CultureComponent } from './components/culture/culture.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
//import { AgmCoreModule } from '@agm/core';
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [

    OgrodjeComponent,
    CultureComponent,
    EventPageComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    //LeafletModule
    /*AgmCoreModule.forRoot({
      apiKey: ''
    })*/
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
