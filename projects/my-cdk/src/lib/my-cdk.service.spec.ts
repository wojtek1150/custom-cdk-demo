import { TestBed } from '@angular/core/testing';

import { MyCdkService } from './my-cdk.service';

describe('MyCdkService', () => {
  let service: MyCdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
