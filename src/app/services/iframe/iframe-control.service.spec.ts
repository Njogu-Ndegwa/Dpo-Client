import { TestBed } from '@angular/core/testing';

import { IframeControlService } from './iframe-control.service';

describe('IframeControlService', () => {
  let service: IframeControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IframeControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
