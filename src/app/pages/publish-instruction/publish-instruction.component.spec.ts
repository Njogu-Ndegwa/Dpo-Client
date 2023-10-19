import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishInstructionComponent } from './publish-instruction.component';

describe('PublishInstructionComponent', () => {
  let component: PublishInstructionComponent;
  let fixture: ComponentFixture<PublishInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishInstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
