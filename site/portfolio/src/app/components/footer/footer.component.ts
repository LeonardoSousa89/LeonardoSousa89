import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  private document_window: Window=window

  private redes_sociais={
      linkedin: 'https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/',
      whatsapp: 'https://wa.me/message/N767K3D4E7TAG1',
      github:   'https://github.com/LeonardoSousa89',
      email:    'mailto:leoprofessionallogytech@outlook.com'
    }

  ngOnInit(): void {}

  public targetLink(link: string): void{
    this.document_window.open(link)
  }

  public targetLinkedin(): void{
    const { linkedin }=this.redes_sociais
    
    this.targetLink(linkedin)
  }

  public targetWhatsapp(): void{
    const { whatsapp }=this.redes_sociais
    
    this.targetLink(whatsapp)
  }

  public targetGithub(){
    const { github }=this.redes_sociais
  
    this.targetLink(github)
  }

  public targetEmail(){
    const { email }=this.redes_sociais
  
    this.targetLink(email)
  }
}
