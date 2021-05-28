import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoHomeComponent } from './campeonato-home.component';

describe('CampeonatoHomeComponent', () => {
  let component: CampeonatoHomeComponent;
  let fixture: ComponentFixture<CampeonatoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
