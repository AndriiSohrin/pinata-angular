import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecondComponent} from './second/second.component';
import {Router, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'second', component: SecondComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
