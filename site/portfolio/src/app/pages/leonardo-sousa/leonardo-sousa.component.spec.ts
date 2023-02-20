import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonardoSousaComponent } from './leonardo-sousa.component';

describe('LeonardoSousaComponent', () => {
  let component: LeonardoSousaComponent;
  let fixture: ComponentFixture<LeonardoSousaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeonardoSousaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeonardoSousaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
