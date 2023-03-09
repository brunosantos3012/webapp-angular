import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditionModalComponent } from './customer-edition-modal.component';

describe('CustomerEditionModalComponent', () => {
  let component: CustomerEditionModalComponent;
  let fixture: ComponentFixture<CustomerEditionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
