import { TestBed, inject } from '@angular/core/testing';

import { ApiservService } from './apiserv.service';

describe('ApiservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiservService]
    });
  });

  it('should be created', inject([ApiservService], (service: ApiservService) => {
    expect(service).toBeTruthy();
  }));
});
