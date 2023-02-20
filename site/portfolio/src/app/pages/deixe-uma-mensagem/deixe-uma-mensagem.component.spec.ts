import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeixeUmaMensagemComponent } from './deixe-uma-mensagem.component';

describe('DeixeUmaMensagemComponent', () => {
  let component: DeixeUmaMensagemComponent;
  let fixture: ComponentFixture<DeixeUmaMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeixeUmaMensagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeixeUmaMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
