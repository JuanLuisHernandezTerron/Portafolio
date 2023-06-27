import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortafolioComponent } from './main-portafolio.component';

describe('MainPortafolioComponent', () => {
  let component: MainPortafolioComponent;
  let fixture: ComponentFixture<MainPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
