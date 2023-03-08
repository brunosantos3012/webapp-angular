import { ContactModel } from './../model/contact.model';
import { CustomerRegisterModel } from './../model/customer-register.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Builder } from 'builder-pattern';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegisterService {

  private readonly API_URL = 'http://localhost:3000/customer';

  constructor(
    private http: HttpClient
  ) { }

  public builderCustomerRegister(customer: any): CustomerRegisterModel {
    return Builder<CustomerRegisterModel>()
      .customerName(customer.firstName + ' ' + customer.lastName)
      .cpf(this.cpfFormat(customer.cpf))
      .birthDay(customer.birthDay)
      .monthlyFinance(customer.monthlyFinance)
      .createdDate(Date())
      .contact(
        Builder<ContactModel>()
          .email(customer.email)
        .build()
      )
    .build()
  }

  public cpfFormat(value: string): string {
    return value
      .padStart(11, '0')
      .substring(0, 11)
      .replace(/[^0-9]/, '')
      .replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4'
      )
  }

  public saveCustomer(customer: CustomerRegisterModel): Observable<any> {
    const register = this.builderCustomerRegister(customer);
    return this.http.post<any>(`${this.API_URL}`, register);
  }

}
