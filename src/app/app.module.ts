import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { LogoArgentinaComponent } from './componets/logo-argentina/logo-argentina.component';
import { RedesSocialesComponent } from './componets/redes-sociales/redes-sociales.component';
import { BannerComponent } from './componets/banner/banner.component';
import { AcercaDeComponent } from './componets/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { EducacionComponent } from './componets/educacion/educacion.component';
import { HardYSoftSkillsComponent } from './componets/hard-ysoft-skills/hard-ysoft-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componets/proyectos/proyectos.component';
import { FooterComponent } from './componets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgentinaComponent,
    RedesSocialesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardYSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
