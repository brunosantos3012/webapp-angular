import { ContactModel } from './../../shared/model/contact.model';
import { CustomerRegisterModel } from './../../shared/model/customer-register.model';
import { Builder } from 'builder-pattern';
import { birthDayValidator } from 'src/app/shared/validators/birthDayValidator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-edition-modal',
  templateUrl: './customer-edition-modal.component.html',
  styleUrls: ['./customer-edition-modal.component.scss']
})
export class CustomerEditionModalComponent implements OnInit {

  public formRegister: FormGroup = new FormGroup({});

  constructor(
    private dialogRef: MatDialogRef<CustomerEditionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public customer: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
    if (this.customer) this.setRegisterForm();
  }

  public initRegisterForm(): void {
    this.formRegister = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      birthDay: ['', [Validators.required, birthDayValidator]],
      monthlyFinance: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      createdDate: ['', []],
    })
  }

  public setRegisterForm(): void {
    const name = this.customer.customerName.split(" ", 2);
    this.formRegister.controls['firstName'].setValue(name[0])
    this.formRegister.controls['lastName'].setValue(name[1])
    this.formRegister.controls['cpf'].setValue(this.customer.cpf)
    this.formRegister.controls['cpf'].disable();
    this.formRegister.controls['birthDay'].setValue(this.customer.birthDay)
    this.formRegister.controls['monthlyFinance'].setValue(this.customer.monthlyFinance)
    this.formRegister.controls['email'].setValue(this.customer.contact.email)
    this.formRegister.controls['createdDate'].setValue(this.customer.createdDate)
  }

  public onClosed(id: string, customer: any): CustomerRegisterModel {
    return this.builderCustomerRegister(id, customer);
  }

  public builderCustomerRegister(id: string, customer: any): CustomerRegisterModel {
    return Builder<CustomerRegisterModel>()
      .id(id)
      .customerName(customer.firstName + ' ' + customer.lastName)
      .cpf(customer.cpf)
      .birthDay(customer.birthDay)
      .monthlyFinance(customer.monthlyFinance)
      .createdDate(customer.createdDate)
      .contact(
        Builder<ContactModel>()
          .email(customer.email)
        .build()
      )
    .build()
  }

  public close(): void {
    this.dialogRef.close();
  }
}
