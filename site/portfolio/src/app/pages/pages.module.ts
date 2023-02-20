import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Global Components 
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component'

//Pages Module Components
import { PagesRoutingModule } from './pages-routing.module';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { MinhasSkillsComponent } from './minhas-skills/minhas-skills.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { DeixeUmaMensagemComponent } from './deixe-uma-mensagem/deixe-uma-mensagem.component';
import { ErrorComponent } from './error/error.component';
import { LeonardoSousaComponent } from './leonardo-sousa/leonardo-sousa.component';

@NgModule({
  declarations: [
    QuemSouComponent,
    MinhasSkillsComponent,
    MeusProjetosComponent,
    DeixeUmaMensagemComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LeonardoSousaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
