import { TestBed } from '@angular/core/testing';

import { AuthdbService } from './authdb.service';

describe('AuthdbService', () => {
  let service: AuthdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
