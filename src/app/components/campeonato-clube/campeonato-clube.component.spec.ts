import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoClubeComponent } from './campeonato-clube.component';

describe('CampeonatoClubeComponent', () => {
  let component: CampeonatoClubeComponent;
  let fixture: ComponentFixture<CampeonatoClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
