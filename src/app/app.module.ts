import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { NavComponent } from './nav/nav/nav.component';
import { HeroSectionComponent } from './hero-section/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
