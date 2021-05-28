import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoJogadorComponent } from './campeonato-jogador.component';

describe('CampeonatoJogadorComponent', () => {
  let component: CampeonatoJogadorComponent;
  let fixture: ComponentFixture<CampeonatoJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
