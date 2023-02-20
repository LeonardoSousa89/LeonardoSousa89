import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { MinhasSkillsComponent } from './minhas-skills/minhas-skills.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { DeixeUmaMensagemComponent } from './deixe-uma-mensagem/deixe-uma-mensagem.component';


@NgModule({
  declarations: [
    HeaderComponent,
    QuemSouComponent,
    MinhasSkillsComponent,
    MeusProjetosComponent,
    DeixeUmaMensagemComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
