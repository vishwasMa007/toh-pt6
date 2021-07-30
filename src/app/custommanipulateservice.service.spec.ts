import { TestBed } from '@angular/core/testing';

import { CustommanipulateserviceService } from './custommanipulateservice.service';

describe('CustommanipulateserviceService', () => {
  let service: CustommanipulateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustommanipulateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
