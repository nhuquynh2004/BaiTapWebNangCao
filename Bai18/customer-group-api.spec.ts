import { TestBed } from '@angular/core/testing';
import { CustomerGroupApiService } from './customer-group-api';

describe('CustomerGroupApiService', () => {
  let service: CustomerGroupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerGroupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
