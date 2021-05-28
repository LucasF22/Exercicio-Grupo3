import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HomeComponent } from '.';
//import { JogadorComponent } from './JogadorComponent/jogador.component';
//import { ClubesComponent } from './ClubesComponent/clubes.component.component';
//import { PartidasComponent } from './PartidasComponent/partidas.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: 'home', component: HomeComponent },
  //{ path: 'Jogador', component: JogadorComponent },
  //{ path: 'Clubes', component: ClubesComponent },
  //{ path: 'Partidas', component: PartidasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
