/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerConsultService } from './customer-consult.service';

describe('Service: CustomerConsult', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerConsultService]
    });
  });

  it('should ...', inject([CustomerConsultService], (service: CustomerConsultService) => {
    expect(service).toBeTruthy();
  }));
});
