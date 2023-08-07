import { TestBed } from '@angular/core/testing';

import {FiveStepProcessService} from './five-step-process.service'

describe('FiveStepProcessService', () => {
  let service: FiveStepProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveStepProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
