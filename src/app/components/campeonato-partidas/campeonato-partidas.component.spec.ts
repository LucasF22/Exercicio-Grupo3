import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoPartidasComponent } from './campeonato-partidas.component';

describe('CampeonatoPartidasComponent', () => {
  let component: CampeonatoPartidasComponent;
  let fixture: ComponentFixture<CampeonatoPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoPartidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
