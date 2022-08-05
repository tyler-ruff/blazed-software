import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LazyLoadDirective } from './lazyload.directive';

import { AuthModule } from '@auth0/auth0-angular';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    BrowseComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'blazed.us.auth0.com',
      clientId: 'Fm4pXaiUycP0QLnuH6qbV2JfYQrY9Qz2'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
