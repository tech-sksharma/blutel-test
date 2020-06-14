import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { DialerComponent } from './components/dialer/dialer.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    DialerComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
