import { CustomerRegisterService } from './service/customer-register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {

  public formRegister: FormGroup = new FormGroup({});

  constructor(
    private service: CustomerRegisterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  public initRegisterForm(): void {
    this.formRegister = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDay: ['', [Validators.required]],
      monthlyFinance: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  public onSubmitForm(): void {
    this.service.saveCustomer(this.formRegister.getRawValue()).subscribe(res => {
      res: this.resetFormRegister();
    });
  }

  public resetFormRegister(): void {
    this.formRegister.reset();
    Object.keys(this.formRegister.controls).forEach(key => {
      const control = this.formRegister.controls[key];
      control.setErrors(null)
    })
  }

}
