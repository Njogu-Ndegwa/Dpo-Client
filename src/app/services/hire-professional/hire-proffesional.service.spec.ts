import { TestBed } from '@angular/core/testing';

import { HireProffesionalService } from './hire-proffesional.service';

describe('HireProffesionalService', () => {
  let service: HireProffesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireProffesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
