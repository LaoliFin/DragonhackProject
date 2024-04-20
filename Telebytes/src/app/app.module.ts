import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { CultureComponent } from './components/culture/culture.component';
//import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapaComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    
    OgrodjeComponent,
    CultureComponent,
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule
    /*AgmCoreModule.forRoot({
      apiKey: ''
    })*/,
    RouterModule.forRoot([
      { path: "culture", component: CultureComponent },
      { path: "eventpage", component: EventPageComponent },
      { path: "map", component: MapaComponent}
      //dodaj pot do mojega url
    ]),
  ],
  providers: [],
  bootstrap: [ OgrodjeComponent ]
})
export class AppModule { }
