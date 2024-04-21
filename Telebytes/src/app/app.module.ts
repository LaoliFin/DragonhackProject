import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { CultureComponent } from './components/culture/culture.component';
import { EventComponent } from './components/event-card/event-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
//import { AgmCoreModule } from '@agm/core';
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [

    OgrodjeComponent,
    NavigationComponent,
    CultureComponent,
    EventPageComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Add this line
    //LeafletModule,
    /*AgmCoreModule.forRoot({
      apiKey: ''
    })*/
    RouterModule.forRoot([
      { path: "", component: HomepageComponent },
      { path: "culture", component: CultureComponent },
      { path: "eventpage", component: EventComponent },
    ]),
  ],
  providers: [],
  bootstrap: [ OgrodjeComponent ]
})
export class AppModule { }
