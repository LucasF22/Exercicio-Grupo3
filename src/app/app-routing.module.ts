import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatoHomeComponent } from './components/campeonato-home/campeonato-home.component';
import { CampeonatoClubeComponent } from './components/campeonato-clube/campeonato-clube.component';
import { CampeonatoJogadorComponent } from './components/campeonato-jogador/campeonato-jogador.component';
import { CampeonatoPartidasComponent } from './components/campeonato-partidas/campeonato-partidas.component';


const routes: Routes = [
  { path: '', component: CampeonatoHomeComponent },
  { path: 'Jogador', component: CampeonatoJogadorComponent },
  { path: 'Clubes', component: CampeonatoClubeComponent },
  { path: 'Partidas', component: CampeonatoPartidasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
