import { ContactModel } from './../../../shared/model/contact.model';
import { Builder } from 'builder-pattern';
import { CustomerRegisterModel } from './../../../shared/model/customer-register.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerConsultService {

  private readonly API_URL = 'http://localhost:3000/customer';

  constructor(
    private http: HttpClient
  ) { }

  public getCustomer(page?: number, limit?: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/?_page=${page || 0}&_limit=${limit || 10}`, );
  }

  public deleteCustomer(customerId: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${customerId}`);
  }

  public updateCustomer(id: string, customer: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, customer);
  }

  public builderCustomerRegister(customer: any): CustomerRegisterModel {
    return Builder<CustomerRegisterModel>()
      .customerName(customer.customerName)
      .cpf(customer.cpf)
      .birthDay(customer.birthDay)
      .monthlyFinance(customer.monthlyFinance)
      .createdDate(customer.createdDate)
      .contact(
        Builder<ContactModel>()
          .email(customer.contact.email)
        .build()
      )
    .build()
  }

}
