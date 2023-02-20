import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasSkillsComponent } from './minhas-skills.component';

describe('MinhasSkillsComponent', () => {
  let component: MinhasSkillsComponent;
  let fixture: ComponentFixture<MinhasSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
