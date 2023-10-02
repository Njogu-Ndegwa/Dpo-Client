import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmVerificatonCodeComponent } from './confirm-verificaton-code.component';

describe('ConfirmVerificatonCodeComponent', () => {
  let component: ConfirmVerificatonCodeComponent;
  let fixture: ComponentFixture<ConfirmVerificatonCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmVerificatonCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmVerificatonCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
