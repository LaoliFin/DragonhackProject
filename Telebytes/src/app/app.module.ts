import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { CultureComponent } from './components/culture/culture.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
//import { AgmCoreModule } from '@agm/core';
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './components/login/login.component';
import { MusicComponent } from './components/music/music.component';
import { LanguageComponent } from './components/language/language.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [

    OgrodjeComponent,
    NavigationComponent,
    CultureComponent,
    EventPageComponent,
    EventCardComponent,
    LoginComponent,
    MusicComponent,
    LanguageComponent,
    PostComponent
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
      { path: "events", component: EventPageComponent },
      { path: "loginregister", component: LoginComponent },
      { path: "home", component: HomepageComponent },
      { path: "music", component: MusicComponent },
      { path: "language", component: LanguageComponent },
    ]),
    OAuthModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ OgrodjeComponent ]
})
export class AppModule { }
