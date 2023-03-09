/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerRegisterService } from './customer-register.service';

describe('Service: CustomerRegister', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerRegisterService]
    });
  });

  it('should ...', inject([CustomerRegisterService], (service: CustomerRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
