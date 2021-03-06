import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CodeComponent } from './code/code.component';
import { FluteComponent } from './flute/flute.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found.component';
import { CodeService } from './code/code.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CodeComponent,
    FluteComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [CodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
