import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveStepProcessComponent } from './five-step-process.component';

describe('FiveStepProcessComponent', () => {
  let component: FiveStepProcessComponent;
  let fixture: ComponentFixture<FiveStepProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveStepProcessComponent]
    });
    fixture = TestBed.createComponent(FiveStepProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
