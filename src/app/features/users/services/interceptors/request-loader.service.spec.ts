import { TestBed } from '@angular/core/testing';

import { RequestLoaderService } from './request-loader.service';

describe('RequestLoaderService', () => {
  let service: RequestLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
