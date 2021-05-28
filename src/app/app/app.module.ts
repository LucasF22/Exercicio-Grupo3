import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { CampeonatoJogadorComponent } from '../components/campeonato-jogador/campeonato-jogador.component';
import { CampeonatoHomeComponent } from '../components/campeonato-home/campeonato-home.component';
import { CampeonatoClubeComponent } from '../components/campeonato-clube/campeonato-clube.component';
import { CampeonatoPartidasComponent } from '../components/campeonato-partidas/campeonato-partidas.component';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    CampeonatoJogadorComponent,
    CampeonatoHomeComponent,
    CampeonatoClubeComponent,
    CampeonatoPartidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
