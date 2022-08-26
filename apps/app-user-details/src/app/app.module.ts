import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { userDetailsRoutes } from './app.routing.module';

import { environment } from '../environments/environment';
import { UserDetailsModule } from '@user-details/user-details';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    userDetailsRoutes,
    UserDetailsModule.forRoot(environment),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
