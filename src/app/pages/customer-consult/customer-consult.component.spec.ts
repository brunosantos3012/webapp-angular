import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerConsultComponent } from './customer-consult.component';

describe('CustomerConsultComponent', () => {
  let component: CustomerConsultComponent;
  let fixture: ComponentFixture<CustomerConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
