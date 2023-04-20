import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyTop10Component } from './vacancy-top10.component';

describe('VacancyTop10Component', () => {
  let component: VacancyTop10Component;
  let fixture: ComponentFixture<VacancyTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyTop10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
