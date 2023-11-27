import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationmenuComponent } from './navigationmenu/navigationmenu.component';
import { TkosmomiComponent } from './tkosmomi/tkosmomi.component';
import { CimesebavimoComponent } from './cimesebavimo/cimesebavimo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationmenuComponent,
    TkosmomiComponent,
    CimesebavimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
