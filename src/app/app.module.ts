import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { LogoArgentinaComponent } from './componets/logo-argentina/logo-argentina.component';
import { RedesSocialesComponent } from './componets/redes-sociales/redes-sociales.component';
import { BannerComponent } from './componets/banner/banner.component';
import { AcercaDeComponent } from './componets/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgentinaComponent,
    RedesSocialesComponent,
    BannerComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
