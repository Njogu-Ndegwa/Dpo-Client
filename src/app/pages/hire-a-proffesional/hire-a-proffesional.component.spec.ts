import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireAProffesionalComponent } from './hire-a-proffesional.component';

describe('HireAProffesionalComponent', () => {
  let component: HireAProffesionalComponent;
  let fixture: ComponentFixture<HireAProffesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireAProffesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireAProffesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
