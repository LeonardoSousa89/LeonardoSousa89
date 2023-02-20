import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeixeUmaMensagemComponent } from './deixe-uma-mensagem/deixe-uma-mensagem.component';
import { ErrorComponent } from './error/error.component';
import { LeonardoSousaComponent } from './leonardo-sousa/leonardo-sousa.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { MinhasSkillsComponent } from './minhas-skills/minhas-skills.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';

const routes: Routes = [
   
  { path: '', component: LeonardoSousaComponent },
  { path: 'quem-sou', component: QuemSouComponent },
  { path: 'minhas-skills', component: MinhasSkillsComponent },
  { path: 'meus-projetos', component: MeusProjetosComponent  },
  { path: 'deixe-uma-mensagem', component: DeixeUmaMensagemComponent },
  { path: 'erro', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
