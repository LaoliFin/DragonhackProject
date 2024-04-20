import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    LeafletModule
    /*AgmCoreModule.forRoot({
      apiKey: ''
    })*/
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
