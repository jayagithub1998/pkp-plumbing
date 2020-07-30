import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import {SliderModule} from 'angular-image-slider'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FontAwesomeModule} from '@Fortawesome/angular-fontawesome';
import { HeadComponent } from './head/head.component'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GallaryComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
